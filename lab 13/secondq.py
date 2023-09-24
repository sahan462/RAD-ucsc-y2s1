from selenium import webdriver
from selenium.webdriver.firefox.service import Service as FirefoxService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

service = FirefoxService(log_output="geckodriver.log")
driver = webdriver.Firefox(service=service)
driver.get("https://demo.opencart.com/")

wait = WebDriverWait(driver, 10)
search = wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/header/div/div/div[2]/div/input")))

search.send_keys("iphone")
search_button = wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/header/div/div/div[2]/div/button")))
search_button.click()

