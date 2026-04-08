exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page
        this.cartProducts = "//td[normalize-space()]"
    }

    async findProductInTheCart(productName) {
        const products = await this.page.$$(this.cartProducts)

        for (const product of products) {
            console.log(await product.textContent())
            console.log("added product found in the cart page..........")
            if (productName === await product.textContent()) {
                return true
            }
        }
    }

    /*async deleteFromCart() {
        const deleteButtons = this.page.locator("//tbody/tr/td[4]/a[1]");

        while (await deleteButtons.count() > 0) {
            await deleteButtons.first().click();
        }
    }*/
    async deleteFromCart() {
        const rows = this.page.locator("tbody tr");

        let count = await rows.count();
        console.log("Initial cart count:", count);

        while (count > 0) {
            const firstRow = rows.first();

            // Click delete inside this row
            await firstRow.locator("text=Delete").click();

            // HARD WAIT (temporary for debugging)
            await this.page.waitForTimeout(1000);

            const newCount = await rows.count();
            console.log("Remaining:", newCount);

            // Safety check to avoid infinite loop
            if (newCount === count) {
                throw new Error("Row was not deleted — click not working");
            }

            count = newCount;
        }
    }


}
