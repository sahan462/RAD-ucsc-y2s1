from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize the web driver (replace 'chromedriver' with the path to your WebDriver)
from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager

driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()))

# Open the website
driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

# Find and fill in the username and password fields using XPath
wait = WebDriverWait(driver, 20)
username = wait.until(EC.presence_of_element_located((By.XPATH, "//input[@id='Username']")))
password = driver.find_element(By.XPATH, "//input[@id='Password']")

username.send_keys("admin")
password.send_keys("admin123")

# Log in using XPath
driver.find_element(By.XPATH, "//input[@id='btnLogin']").click()

# Navigate to the claim section using XPath
driver.find_element(By.XPATH, "//a[text()='Claim']").click()
driver.find_element(By.XPATH, "//a[text()='Assign Leave']").click()

# Create a claim request for Peter Mac Anderson
employee_id = driver.find_element(By.XPATH, "//input[@id='assignemployee_claimrequest_employeeId']")
claim_type = driver.find_element(By.XPATH, "//input[@id='assignemployee_claimrequest_claimType']")
currency = driver.find_element(By.XPATH, "//input[@id='assignemployee_claimrequest_currencyId']")
remarks = driver.find_element(By.XPATH, "//input[@id='assignemployee_claimrequest_remarks']")

employee_id.send_keys("Peter Mac Anderson")
claim_type.send_keys("Travel Allowance")
currency.send_keys("United States Dollars")
remarks.send_keys("Pay $100 as travel allowance")

# Add expenses for the day 2023-09-08
date = driver.find_element(By.XPATH, "//input[@id='assignemployee_claimrequest_date']")
date.send_keys("2023-09-08")

expenses = [
    "Accommodation - $30",
    "Fuel Allowance - $30",
    "Transport - $40"
]

for i, expense in enumerate(expenses):
    expense_field = driver.find_element(By.XPATH, f"//input[@id='assignemployee_claimrequest_expense_{i}']")
    expense_field.send_keys(expense)

# Submit the claim using XPath
add_expense_button = driver.find_element(By.XPATH, "//input[@id='assignemployee_claimrequest_btnAddExpense']")
add_expense_button.click()

save_button = driver.find_element(By.XPATH, "//input[@id='assignemployee_claimrequest_btnSave']")
save_button.click()

# Click the back button
driver.back()

# Close the browser
driver.quit()
