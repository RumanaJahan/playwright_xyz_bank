// utils/baseTest.js
import { test as base, expect } from '@playwright/test';
import * as loginPage from '../pageObject/loginPage.js';

const test = base.extend({
  // Automatically launch XYZ Bank before each test
  page: async ({ page }, use) => {
    await loginPage.launchXyzBank(page);
    await use(page);
  },
});

export { test, expect };
