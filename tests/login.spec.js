import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Verify user can login using valid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertLoginPageLoaded();
});

test('Verify user cannot login using invalid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce1');
  await loginPage.assertErrorLogin('Username and password do not match any user in this service');
});

test('Verify user cannot login using locked out user credential', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  await loginPage.assertErrorLogin('Sorry, this user has been locked out.');
});

test('Verify user can login using problem user credential', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('problem_user', 'secret_sauce');
  await loginPage.assertLoginPageLoaded();
});

test('Verify user can login using valid credential then logout', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertLoginPageLoaded();
  await loginPage.logout()
});