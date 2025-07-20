import { test, expect } from '../utils/baseTest.js';
import * as loginPage from '../pageObject/loginPage.js';
import * as logoutPage from '../pageObject/logoutPage.js';


test('Customer should log out successfully', async ({ page }) => {
  await loginPage.launchCustomerLogin(page);
  await logoutPage.customerLogout(page);
  });

