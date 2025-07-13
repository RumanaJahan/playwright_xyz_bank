// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';

 //--------------------------------------------------------------------------------------------------------------------------
 //LAUNCH SPECIFIC PAGES
 //--------------------------------------------------------------------------------------------------------------------------

export async function addCustomer(page, firstName, lastName, postCode) {
  // Click on "Add Customer" to open the form
  await page.locator('button[ng-click="addCust()"]').click();

  // Fill in form fields (simulate user typing to trigger Angular binding)
  await page.locator('input[ng-model="fName"]').fill(firstName);
  await page.locator('input[ng-model="lName"]').fill(lastName);
  await page.locator('input[ng-model="postCd"]').fill(postCode);


  // Click submit and wait for alert dialog
  const [dialog] = await Promise.all([
    page.waitForEvent('dialog', { timeout: 3000 }),
    page.locator('button[type="submit"]').click()
  ]);

  console.log(`Dialog message: ${dialog.message()}`);
  await dialog.accept();
}



export async function deleteCustomer(page, firstName, lastName) {
  // Go to "Customers" tab
  await page.locator('button[ng-click="showCust()"]').click();

  // Find all rows in the customer table
  const rows = page.locator('table tbody tr');
  const count = await rows.count();

  for (let i = 0; i < count; i++) {
    const row = rows.nth(i);
    const rowText = await row.textContent();

    // Match the customer by first and last name
    if (rowText.includes(firstName) && rowText.includes(lastName)) {
      // Click the delete button in the matched row
      const deleteBtn = row.locator('button');
      await deleteBtn.click();
      console.log(`Deleted customer: ${firstName} ${lastName}`);
      return;
    }
  }

  throw new Error(`Customer ${firstName} ${lastName} not found for deletion`);
}