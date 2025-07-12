// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';

 //--------------------------------------------------------------------------------------------------------------------------
 //LAUNCH SPECIFIC PAGES
 //--------------------------------------------------------------------------------------------------------------------------

 export async function launchxyzbank(page) 
 {
   const nav = await page.goto('#/login');
   const xyzurl = page.url();
   await expect(page).toHaveURL(xyzurl);
   console.log('Current url is:', xyzurl);
   await page.setViewportSize({ width: 1920, height: 1080 });
   //Verify and print the page title
   const xyztitle = await page.title();
   console.log('Page title:', xyztitle);
 }

 // Select random username
export async function getcustomername() {
  const customernamearray = [
    'Hermoine Granger',
    'Harry Potter',
    'Ron Weasly',
    'Albus Dumbledore',
    'Neville Longbottom',
  ];
  const randomIndex = Math.floor(Math.random() * customernamearray.length);
  return customernamearray[randomIndex];
}

 export async function launchcustomerlogin(page) 
 {
  await launchxyzbank(page);  
  const customerButton = page.locator('button[ng-click="customer()"]');
  
  //Click the Login button
  await customerButton.click();

  await expect(page).toHaveURL(/customer/);

  const userSelect = page.locator('select#userSelect');
  await expect(userSelect).toBeVisible();
  
  const customerName = await getcustomername();
  await userSelect.selectOption({ label: customerName });

  const loginButton = page.locator('button[type="submit"]');
  loginButton.click();
  
  await expect(page.locator('.fontBig')).toHaveText(new RegExp(customerName));
  console.log(`Logged in as: ${customerName}`);
 }

 export async function launchmanagerlogin(page) 
 {
  await launchxyzbank(page);  
  const managerLoginBtn = page.locator('button[ng-click="manager()"]');
  await managerLoginBtn.click();
  
  //Verify URL after login
  await expect(page).toHaveURL(/manager/);
  
  //Verify all buttons are visible
  await expect(page.locator('button[ng-click="addCust()"]')).toBeVisible();
  
  //Verify button have correct text
  await expect(page.getByRole('button', { name: 'Add Customer' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Customers' })).toBeVisible();
    
 }
