import { test, expect } from '@playwright/test'

test('in built locators test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    page.click('#login-button')

    expect(await page.textContent("//div[normalize-space()='Sauce Labs Backpack']")).toContain('Sauce Labs Backpack')

})