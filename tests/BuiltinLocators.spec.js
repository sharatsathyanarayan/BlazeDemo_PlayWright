/*

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


*/

import { test, expect } from '@playwright/test';

test('BuiltinLocators', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page.getByAltText('company-branding')).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { type: 'submit' }).click();

    await page.waitForURL('**/dashboard/**');

    const user = page.locator("//p[@class='oxd-userdropdown-name']");
    await expect(user).toBeVisible();

    await page.close();
});