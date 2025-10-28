import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://www.saucedemo.com', // ✅ Base URL for page.goto('/')
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});
