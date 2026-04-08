import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { Productspage } from '../Pages/ProductsPage'
import { CartPage } from '../Pages/CartPage'

test('Blazedemo page object model test', async ({ page }) => {

    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('pavanol', 'test@123')
    await page.waitForTimeout(3000)

    const device = new Productspage(page)
    await device.addproducts('Samsung galaxy s6')
    await page.waitForTimeout(3000)

    const cart = new CartPage(page)
    let bool = await cart.findProductInTheCart('Samsung galaxy s6')
    expect(await bool).toBe(true)
    await cart.deleteFromCart()
    await page.waitForTimeout(3000)

})