import { expect } from '@playwright/test';
import { Locators } from '../locators/locators.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.locator = Locators; 
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com'); 
  }

  async login(username, password) {
    await this.page.fill(this.locator.usernameField, username);
    await this.page.fill(this.locator.passwordField, password);
    await this.page.click(this.locator.loginButton);
  }

  async logout() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await this.page.click(this.locator.burgerButton);
    await this.page.click(this.locator.logoutSidebar);
    await expect(this.page).toHaveURL('https://www.saucedemo.com');
  }
  async assertLoginPageLoaded() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
  }

  async assertLoginFailed() {
    await expect(this.page.locator(this.locator.errorMessage)).toBeVisible(this.locator.errorMessage);
  }

  async assertErrorLogin(errorMessage) {
    await expect(this.page.locator(this.locator.errorMessage)).toContainText(errorMessage);
  }
}
