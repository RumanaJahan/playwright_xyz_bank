// tests/managerLoginTest.js
import { test, expect } from '../utils/baseTest.js';
import * as loginPage from '../pageObject/loginPage.js';

test('should launch the manager login screen', async ({ page }) => {
  await loginPage.launchManagerLogin(page);
});
