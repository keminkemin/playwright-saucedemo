import { expect } from '@playwright/test';
import { Locators } from '../locators/locators.js';

export class ProductPage {
  constructor(page) {
    this.page = page;
    this.locator = Locators; 
  }
    async assertProductPageLoaded() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    }

    async assertProductExist() {
    await expect(this.page.locator(this.locator.sauceLabBackPack)).toBeVisible();
    await expect(this.page.locator(this.locator.sauceLabBikeLight)).toBeVisible();
    await expect(this.page.locator(this.locator.sauceLabBoltTShirt)).toBeVisible();
    await expect(this.page.locator(this.locator.sauceLabFleeceJacket)).toBeVisible();
    await expect(this.page.locator(this.locator.sauceLabOnesie)).toBeVisible();
    await expect(this.page.locator(this.locator.sauceLabRedTShirt)).toBeVisible();
  }
}