import { test, expect } from '@playwright/test';
import * as loginPage from '../pageObject/loginPage.js';


test('should launch the manager login screen', async ({ page,context}) => {
    await loginPage.launchXyzBank(page);
    await loginPage.launchManagerLogin(page);
  });