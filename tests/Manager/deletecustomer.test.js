import { test, expect } from '@playwright/test';
import * as loginPage from '../pageObject/loginPage.js';
import * as managerPage from '../pageObject/managerPage.js';

function generateRandomCustomer() {
  const id = Math.floor(Math.random() * 10000);
  return {
    firstName: `AutoFirst${id}`,
    lastName: `AutoLast${id}`,
    postCode: `${id}PC`
  };
}

test.describe('Manager Customer Management', () => {

  test('should add and then delete a customer dynamically', async ({ page }) => {
    // Generate customer data
    const customer = generateRandomCustomer();

    // Launch app and login as manager
    await loginPage.launchXyzBank(page);
    await loginPage.launchManagerLogin(page);

    // Add the customer dynamically
    await managerPage.addCustomer(page, customer.firstName, customer.lastName, customer.postCode);

    // Delete the same customer
    await managerPage.deleteCustomer(page, customer.firstName, customer.lastName);
  });

});
