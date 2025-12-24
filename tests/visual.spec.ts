import { test, expect } from '@playwright/test';

test('basic terrain visual check', async ({ page }) => {
  // This expects the example to be running on localhost:5173
  await page.goto('/');
  await page.waitForSelector('canvas', { timeout: 10000 });
  // Allow time for 3D assets to load and initial frame to render
  await page.waitForTimeout(2000);
  
  // We use a high maxDiffPixelRatio because 3D rendering can vary slightly between environments
  await expect(page).toHaveScreenshot('basic-terrain.png', {
    maxDiffPixelRatio: 0.05,
  });
});
