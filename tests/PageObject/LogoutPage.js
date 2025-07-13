// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';

 //--------------------------------------------------------------------------------------------------------------------------
 //LAUNCH SPECIFIC PAGES
 //----------

 export async function customerLogout(page) 
 {
  //Locate the logout button 
  const logoutButton = page.locator('button[ng-click="byebye()"]');
  
  //Verifies that the logout button is visible
  await expect(logoutButton).toBeVisible(); 
  
  //Click the logout button
  await logoutButton.click();
  
  //Verify that the URL has changed to the customer landing route after logout
  await expect(page).toHaveURL(/#\/customer/);
 }