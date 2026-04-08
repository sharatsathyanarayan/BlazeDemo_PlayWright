exports.Productspage = class ProductsPage {

    constructor(page) {
        this.page = page
        this.productslink = "//div[@id='tbodyid']/div//h4"
        this.addtoCart = "//a[@class='btn btn-success btn-lg']"
        this.cartlink = "//a[@id='cartur']"
    }

    async addproducts(productName) {
        let productList = await this.page.$$(this.productslink)

        for (const product of productList) {
            if (productName === await product.textContent()) {
                console.log(await product.textContent())
                console.log("product found..........")
                await product.click()
                break
            }
        }

        await this.page.locator(this.addtoCart).click()
        await this.page.waitForTimeout(1000)

        await this.page.on('dialog', async dialog => {
            if (dialog.message().includes('added')) {
                await dialog.accept()
            }

        });

        await this.page.locator(this.cartlink).click()
    }






}