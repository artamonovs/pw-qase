// @ts-check
import { test, expect }  from '@playwright/test';
import { qase } from 'playwright-qase-reporter/dist/playwright';

test(qase(5,'has title'), async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test(qase(6, 'get started link'), async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
