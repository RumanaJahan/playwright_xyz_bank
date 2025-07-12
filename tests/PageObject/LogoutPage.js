// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';

 //--------------------------------------------------------------------------------------------------------------------------
 //LAUNCH SPECIFIC PAGES
 //----------

 export async function customerlogout(page) 
 {
   const logoutBtn = page.locator('button[ng-click="byebye()"]');
   await expect(logoutBtn).toBeVisible(); // optional check
   await logoutBtn.click();
   await expect(page).toHaveURL(/#\/customer/);
 }