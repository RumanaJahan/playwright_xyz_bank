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

 export async function launchcustomerlogin(page) 
 {
  await launchxyzbank(page);  
  const customerLoginBtn = page.locator('button[ng-click="customer()"]');
  await customerLoginBtn.click();
  await expect(page).toHaveURL(/customer/);
  const userSelect = page.locator('select#userSelect');
  await expect(userSelect).toBeVisible();
  userSelect.selectOption({ label: customerName });
  const loginBtn = page.locator('button[type="submit"]');
  loginBtn.click();
 }

 export async function launchmanagerlogin(page) 
 {
  await launchxyzbank(page);  
  const managerLoginBtn = page.locator('button[ng-click="manager()"]');
  await managerLoginBtn.click();
  await expect(page).toHaveURL(/manager/);
  await expect(page.locator('button[ng-click="addCust()"]')).toBeVisible();
 }
