import { test, expect } from '@playwright/test';
import * as loginPage from '../pageObject/loginPage.js';
import * as logoutPage from '../pageObject/logoutPage.js';

test('should launch the customer login screen', async ({ page,context}) => {
    await loginPage.launchXyzBank(page);
    await loginPage.launchCustomerLogin(page);
    await logoutPage.customerLogout(page);
  });