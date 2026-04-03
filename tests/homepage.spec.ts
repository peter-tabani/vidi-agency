import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check title
  await expect(page).toHaveTitle(/Vidi Agency/i);
  
  // Check hero section exists
  await expect(page.locator('h1')).toBeVisible();
  
  // Check navigation exists
  await expect(page.locator('nav')).toBeVisible();
});

test('contact page has working form', async ({ page }) => {
  await page.goto('/contact');
  
  // Check form elements exist
  await expect(page.locator('input[name="name"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('textarea[name="message"]')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();
});

test('solutions page loads', async ({ page }) => {
  await page.goto('/solutions');
  
  // Check solutions content exists
  await expect(page.locator('h1')).toContainText(/Solutions/i);
});

test('case studies page loads', async ({ page }) => {
  await page.goto('/case-studies');
  
  // Check case studies content exists
  await expect(page.locator('h1')).toContainText(/Case Studies/i);
});

test('blog page loads', async ({ page }) => {
  await page.goto('/blog');
  
  // Check blog content exists
  await expect(page.locator('h1')).toContainText(/Blog/i);
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Click on Solutions link
  await page.click('a[href="/solutions"]');
  await expect(page).toHaveURL(/\/solutions/);
  
  // Go back to home
  await page.click('a[href="/"]');
  await expect(page).toHaveURL(/^\/$/);
});

test('footer is visible on all pages', async ({ page }) => {
  const pages = ['/', '/contact', '/solutions', '/case-studies', '/blog'];
  
  for (const path of pages) {
    await page.goto(path);
    await expect(page.locator('footer')).toBeVisible();
  }
});
