import { test, expect } from '@playwright/test';
import * as loginPage from '../pageObject/loginPage.js';


test('should launch the customer login screen', async ({ page,context}) => {
    await loginPage.launchXyzBank(page);
    await loginPage.launchCustomerLogin(page);
  });


