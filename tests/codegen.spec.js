import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('tr:nth-child(4) > td:nth-child(4) > input').check();

  await page.waitForTimeout(1000)

  await page.getByRole('link', { name: '2', exact: true }).click();

  await page.waitForTimeout(1000)

  await page.locator('tr:nth-child(3) > td:nth-child(4) > input').check();

  await page.waitForTimeout(1000)


  await page.getByRole('link', { name: '3', exact: true }).click();
  await page.waitForTimeout(1000)


  await page.locator('tr:nth-child(5) > td:nth-child(4) > input').check();
  await page.waitForTimeout(1000)


  await page.getByRole('link', { name: '4', exact: true }).click();

  await page.waitForTimeout(1000)


  await page.locator('td:nth-child(4) > input').first().check();

  await page.waitForTimeout(1000)



});