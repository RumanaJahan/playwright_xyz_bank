// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';
import { customerNameArray } from '../data/customerData.js'; 
 //--------------------------------------------------------------------------------------------------------------------------
 //LAUNCH SPECIFIC PAGES
 //--------------------------------------------------------------------------------------------------------------------------

 export async function launchXyzBank(page) 
 {
   // Go to the login page
   await page.goto('#/login');

   // Assert and log current URL
   await expect(page).toHaveURL(/.*#\/login/);
   console.log('Navigated to:', page.url());

   // Get and log page title
   const title = await page.title();
   console.log('Page title:', title);
 }

 // Select random username
export async function getCustomerName() {
  if (customerNameArray.length === 0) {
    throw new Error('Customer name array is empty');
  }
  const randomIndex = Math.floor(Math.random() * customerNameArray.length);
  return customerNameArray[randomIndex];
}

export async function launchCustomerLogin(page) {
  // Locate the "Customer Login" button using its Angular click handler
  const customerButton = page.locator('button[ng-click="customer()"]');
  
  // Click the "Customer Login" button
  await customerButton.click();

  // Verify that the URL now contains "customer" (indicating navigation success)
  await expect(page).toHaveURL(/customer/);

  // Locate the customer dropdown (user selection)
  const userSelect = page.locator('select#userSelect');

  // Ensure the dropdown is visible before interacting with it
  await expect(userSelect).toBeVisible();
  
  // Retrieve a customer name to select (likely from a helper function)
  const customerName = await getCustomerName();

  // Select the customer from the dropdown using their name as the label
  await userSelect.selectOption({ label: customerName });

  // Locate the Login button and click it (submit the form)
  const loginButton = page.locator('button[type="submit"]');
  loginButton.click();

  // Verify that the page now displays the logged-in customer's name
  await expect(page.locator('.fontBig')).toHaveText(new RegExp(customerName));

  // Log the name of the logged-in customer for reference
  console.log(`Logged in as: ${customerName}`);
  
  // Return the customer name so it can be reused in other test steps
  return customerName; 
}


 export async function launchManagerLogin(page) 
 {
  const managerLoginButton = page.locator('button[ng-click="manager()"]');
  await managerLoginButton.click();
  
  //Verify URL after login
  await expect(page).toHaveURL(/manager/);
  
  //Verify all buttons are visible and have correct text
  await expect(page.getByRole('button', { name: 'Add Customer' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Customers' })).toBeVisible();
    
 }
