import { test, expect } from '@playwright/test';

test('SauseLabs Demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    await page.waitForSelector('#user-name')

    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('#login-button')

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await page.waitForSelector(".inventory_item button")

    const addToCartButtons = page.$$(".inventory_item button")
    const count = (await addToCartButtons).length

    expect(count).toBe(6)

    console.log("Number of items: " + count)

    for (const addToCartButton in addToCartButtons) {
        await addToCartButton.click()
    }



    const shoppingCart = await page.click("//a[@data-test='shopping-cart-link']")
    expect(shoppingCart).toHaveProperty.toString('6')

    page.close()

})