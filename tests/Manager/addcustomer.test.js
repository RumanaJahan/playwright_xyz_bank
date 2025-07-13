import { test, expect } from '@playwright/test';
import * as loginPage from '../pageObject/loginPage.js';
import * as managerPage from '../PageObject/ManagerPage.js';

test.describe('Manager Add Customer Tests', () => {
  
  // Setup: Launch bank site and go to manager login before each test
  test.beforeEach(async ({ page }) => {
    await loginPage.launchXyzBank(page);
    await loginPage.launchManagerLogin(page);
  });

  test('should launch the manager login screen', async ({ page }) => {
    const randomId = Math.floor(Math.random() * 1000);
    const firstName = `rumana${randomId}`;
    const lastName = `jahan${randomId}`;
    const postCode = `${randomId}XYZ`;
    await managerPage.addCustomer(page, firstName, lastName, postCode);
  });

});
