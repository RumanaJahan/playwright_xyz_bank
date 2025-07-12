import { test, expect } from '@playwright/test';
import * as LoginPage from '../PageObject/LoginPage.js';


test('should launch the customer login screen', async ({ page,context}) => {
    await LoginPage.launchxyzbank(page);
    await LoginPage.launchcustomerlogin(page);
  });


