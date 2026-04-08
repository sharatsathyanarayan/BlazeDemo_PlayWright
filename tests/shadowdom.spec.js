import { test, expect, chromium } from '@playwright/test'

test.only('shadowdom test using codgen', async ({ browser }) => {

    await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.getByRole('textbox', { name: 'user name field' }).click();
    await page.getByRole('textbox', { name: 'user name field' }).fill('sharat');
    await page.getByRole('textbox', { name: 'Enter pizza name' }).click();
    await page.getByRole('textbox', { name: 'Enter pizza name' }).fill('pineapple');

    await page.screenshot({ path: 'full_page_screenshot.png' });

    await page.waitForTimeout(5000)



});