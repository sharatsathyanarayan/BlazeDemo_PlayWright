exports.LoginPage =
    class LoginPage {

        constructor(page) {
            this.page = page
            this.loginLink = "//a[@id='login2']"
            this.userName = "//input[@id='loginusername']"
            this.password = "//input[@id='loginpassword']"
            this.loginButton = "//button[normalize-space()='Log in']"
        }

        async gotoLoginPage() {
            await this.page.goto("https://www.demoblaze.com/index.html")
        }

        async login(username, password) {
            await this.page.locator(this.loginLink).click()
            await this.page.locator(this.userName).fill(username)
            await this.page.locator(this.password).fill(password)
            await this.page.locator(this.loginButton).click()

        }


    }