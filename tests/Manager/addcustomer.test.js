import { test, expect } from '@playwright/test';
import * as loginPage from '../pageObject/loginPage.js';
import * as managerPage from '../pageObject/managerPage.js';
import { generateRandomCustomerData } from '../utils/testDataUtils.js';

test.describe('Manager Add Customer Tests', () => {
  
  // Setup: Launch bank site and go to manager login before each test
  test.beforeEach(async ({ page }) => {
    await loginPage.launchXyzBank(page);
    await loginPage.launchManagerLogin(page);
  });

  test('should add a customer and confirm dialog message', async ({ page }) => {
    //Generate random customer data
    const {firstName, lastName, postCode} = generateRandomCustomerData();
    
    //Add customer and verify dialog message
    await managerPage.addCustomer(page, firstName, lastName, postCode);
  });
});
