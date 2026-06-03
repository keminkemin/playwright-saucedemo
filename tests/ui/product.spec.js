import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { ProductPage } from '../../pages/ProductPage.js';

test('Verify product page loaded and product exist', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.assertProductPageLoaded();
    await productPage.assertProductExist();
});

test('Verify product page loaded and product exist using problem user credential', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_sauce');
    await productPage.assertProductPageLoaded();
    await productPage.assertProductExist();
}   ); 
