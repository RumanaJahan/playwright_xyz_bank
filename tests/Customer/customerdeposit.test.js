import { test, expect } from '../utils/baseTest.js';
import * as loginPage from '../pageObject/loginPage.js';
import { depositAmount } from '../pageObject/customerDeposit.js';

test.describe('Customer actions after login', () => {

  test.beforeEach(async ({ page }) => {
    await loginPage.launchCustomerLogin(page);
  });

  test('should allow customer to deposit money', async ({ page }) => {
    await depositAmount(page, 500);
  });

});
