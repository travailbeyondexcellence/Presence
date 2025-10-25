import { test, expect } from '@playwright/test';

/**
 * Example End-to-End (E2E) Tests using Playwright
 *
 * This file demonstrates how to write E2E tests that verify the application
 * works correctly from a user's perspective in a real browser.
 *
 * Run these tests with: npm run test:e2e
 *
 * Key Playwright concepts demonstrated:
 * - test(): Defines a test case
 * - page: Represents a browser page
 * - expect(): Assertions for verification
 * - locators: Methods to find elements on the page
 * - page.goto(): Navigate to a URL
 * - page.click(): Click on an element
 * - page.fill(): Fill in form fields
 * - screenshots: Capture screenshots for debugging
 */

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('/');
  });

  test('should load the home page successfully', async ({ page }) => {
    // Verify the page title
    await expect(page).toHaveTitle(/Presence/);

    // Verify the page loaded by checking for common elements
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
  });

  test('should display the navigation bar', async ({ page }) => {
    // Check for navigation elements
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();

    // You can add more specific checks based on your navbar structure
    // For example, checking for logo or navigation links
  });

  test('should display the footer', async ({ page }) => {
    // Scroll to the bottom of the page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check for footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should have proper meta tags', async ({ page }) => {
    // Check for meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /attendance/i);
  });
});

test.describe('Theme Selector', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open theme selector when clicked', async ({ page }) => {
    // Find the theme selector button (palette icon)
    const themeSelectorButton = page.locator('button[aria-label="Change theme"]');
    await expect(themeSelectorButton).toBeVisible();

    // Click to open the theme selector
    await themeSelectorButton.click();

    // Verify the dropdown opens
    await expect(page.getByText('Choose Theme')).toBeVisible();
  });

  test('should display theme options in the dropdown', async ({ page }) => {
    // Open theme selector
    const themeSelectorButton = page.locator('button[aria-label="Change theme"]');
    await themeSelectorButton.click();

    // Wait for dropdown to be visible
    await expect(page.getByText('Choose Theme')).toBeVisible();

    // Check if at least a few theme options are visible
    // (adjust theme names based on your actual themes)
    const themeOptions = page.locator('button').filter({ hasText: /Emerald|Midnight|Celeste/ });
    const count = await themeOptions.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should change theme when a theme option is clicked', async ({ page }) => {
    // Get initial background color
    const initialBgColor = await page.evaluate(() => {
      return getComputedStyle(document.body).backgroundColor;
    });

    // Open theme selector
    const themeSelectorButton = page.locator('button[aria-label="Change theme"]');
    await themeSelectorButton.click();

    // Wait for dropdown
    await expect(page.getByText('Choose Theme')).toBeVisible();

    // Click on a different theme (e.g., Midnight or any other theme)
    // Find the first theme button that's not the current theme
    const themeButtons = page.locator('div.grid button');
    const secondTheme = themeButtons.nth(1);
    await secondTheme.click();

    // Wait for the dropdown to close
    await expect(page.getByText('Choose Theme')).not.toBeVisible();

    // Wait a bit for theme transition
    await page.waitForTimeout(300);

    // Verify the background color has changed
    const newBgColor = await page.evaluate(() => {
      return getComputedStyle(document.body).backgroundColor;
    });

    // The background color should be different after changing the theme
    expect(newBgColor).not.toBe(initialBgColor);
  });

  test('should close theme selector when clicking outside', async ({ page }) => {
    // Open theme selector
    const themeSelectorButton = page.locator('button[aria-label="Change theme"]');
    await themeSelectorButton.click();

    // Verify dropdown is open
    await expect(page.getByText('Choose Theme')).toBeVisible();

    // Click somewhere outside the dropdown
    await page.click('body', { position: { x: 10, y: 10 } });

    // Verify dropdown closes
    await expect(page.getByText('Choose Theme')).not.toBeVisible();
  });

  test('should close theme selector when pressing ESC', async ({ page }) => {
    // Open theme selector
    const themeSelectorButton = page.locator('button[aria-label="Change theme"]');
    await themeSelectorButton.click();

    // Verify dropdown is open
    await expect(page.getByText('Choose Theme')).toBeVisible();

    // Press ESC key
    await page.keyboard.press('Escape');

    // Verify dropdown closes
    await expect(page.getByText('Choose Theme')).not.toBeVisible();
  });

  test('should persist theme selection after page reload', async ({ page }) => {
    // Open theme selector and change theme
    const themeSelectorButton = page.locator('button[aria-label="Change theme"]');
    await themeSelectorButton.click();
    await expect(page.getByText('Choose Theme')).toBeVisible();

    // Select a specific theme
    const themeButtons = page.locator('div.grid button');
    await themeButtons.nth(1).click();

    // Wait for theme to apply
    await page.waitForTimeout(300);

    // Get the background color after theme change
    const bgColorBeforeReload = await page.evaluate(() => {
      return getComputedStyle(document.body).backgroundColor;
    });

    // Reload the page
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Wait for theme to be applied after reload
    await page.waitForTimeout(500);

    // Get the background color after reload
    const bgColorAfterReload = await page.evaluate(() => {
      return getComputedStyle(document.body).backgroundColor;
    });

    // The theme should persist (background color should be the same)
    expect(bgColorAfterReload).toBe(bgColorBeforeReload);
  });
});

test.describe('Navigation', () => {
  test('should navigate to different pages', async ({ page }) => {
    await page.goto('/');

    // Test navigation to About page (if it exists)
    const aboutLink = page.locator('a[href="/about"]').first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page).toHaveURL(/.*about/);
    }

    // Navigate back to home
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });
});

test.describe('Responsive Design', () => {
  test('should display correctly on mobile devices', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check if the page is visible
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Take a screenshot for visual verification
    await page.screenshot({ path: 'tests/e2e/screenshots/mobile-home.png' });
  });

  test('should display correctly on tablet devices', async ({ page }) => {
    // Set viewport to tablet size
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    // Check if the page is visible
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Take a screenshot for visual verification
    await page.screenshot({ path: 'tests/e2e/screenshots/tablet-home.png' });
  });

  test('should display correctly on desktop', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    // Check if the page is visible
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Take a screenshot for visual verification
    await page.screenshot({ path: 'tests/e2e/screenshots/desktop-home.png' });
  });
});
