from selenium import webdriver
from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC



service = FirefoxService(log_output="geckodriver.log")
driver = webdriver.Firefox(service=service)
driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

wait = WebDriverWait(driver, 10)
username = wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input")))
password = wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input")))

username.send_keys("Admin")
password.send_keys("admin123")

# Click the 'Claim' button with a wait
claim_button = wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button")))
claim_button.click()

# Click the 'Assign Leave' link with a wait
assign_leave_link = wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a")))
assign_leave_link.click()

# Click the user profile dropdown with a wait
user_profile_dropdown = wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div/div[1]/div[1]/header/div[2]/nav/ul/li[5]")))
user_profile_dropdown.click()

# Create a claim request for Peter Mac Anderson
employee_id =  wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div/div/input")))
claim_type =  wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/div[1]")))
currency =  wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/div[1]")))
remarks =  wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div/div/div[2]/textarea")))

employee_id.send_keys("Peter Mac Anderson")
claim_type.send_keys("Travel Allowance")
currency.send_keys("United States Dollar")
remarks.send_keys("Pay $100 as travel allowance")

