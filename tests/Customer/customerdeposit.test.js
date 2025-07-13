import { test, expect } from '@playwright/test';
import * as loginPage from '../pageObject/loginPage.js';
import { depositAmount } from '../pageObject/CustomerDeposit.js';

test('Customer deposit flow', async ({ page }) => {
  
  await loginPage.launchXyzBank(page);
  await loginPage.launchCustomerLogin(page);
  await depositAmount(page, 500);
})