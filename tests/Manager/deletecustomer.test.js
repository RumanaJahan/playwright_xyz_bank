import { test, expect } from '@playwright/test';
import * as LoginPage from '../PageObject/LoginPage.js';
import * as ManagerPage from '../PageObject/ManagerPage.js';

test('should launch the manager login screen', async ({ page,context}) => {
    await LoginPage.launchxyzbank(page);
    await LoginPage.launchmanagerlogin(page);
    await ManagerPage.deletecustomer(page, 'rum', 'jhum');
  });