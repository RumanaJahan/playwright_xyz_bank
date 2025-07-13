// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';

 //--------------------------------------------------------------------------------------------------------------------------
 //LAUNCH SPECIFIC PAGES
 //--------------------------------------------------------------------------------------------------------------------------

export async function depositAmount(page, amount) {
  // Navigate to Deposit tab
  await page.locator('button[ng-click="deposit()"]').click();

  // Fill amount
  await page.locator('input[ng-model="amount"]').fill(amount.toString());

  // Submit
  await page.locator('button[type="submit"]').click();

  // Verify confirmation
  await expect(page.locator('text=Deposit Successful')).toBeVisible(); 
}

 