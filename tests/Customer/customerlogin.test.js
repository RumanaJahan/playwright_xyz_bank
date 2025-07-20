// customerLoginTest.js
import { test, expect } from '../utils/baseTest.js';
import * as loginPage from '../pageObject/loginPage.js';

test('should launch the customer login screen', async ({ page }) => {
  await loginPage.launchCustomerLogin(page);
});

