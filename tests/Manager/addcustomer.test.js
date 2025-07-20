import { test, expect } from '../utils/baseTest.js'; 
import * as loginPage from '../pageObject/loginPage.js';
import * as managerPage from '../pageObject/managerPage.js';
import { generateRandomCustomerData } from '../utils/testDataUtils.js';

test.describe('Manager Add Customer Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Only do manager login now
    await loginPage.launchManagerLogin(page);
  });

  test('should add a customer and confirm dialog message', async ({ page }) => {
    const { firstName, lastName, postCode } = generateRandomCustomerData();
    await managerPage.addCustomer(page, firstName, lastName, postCode);

  });

});

