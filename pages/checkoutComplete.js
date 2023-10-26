const { test, expect } = require('@playwright/test');
//const { expect } = require("@playwright/test")

exports.CompletePage = class CompletePage{

    constructor (page) {

        this.page = page
        this.backtoproducts_button = page.locator('[data-test="back-to-products"]')
    }

    async complete(backtoproducts_button){
        await expect(this.page.getByText('Checkout: Complete!')).toBeVisible();
        await expect(this.page.getByText('Thank you for your order! Your order has been dispatched, and will arrive just as fast as the pony can get there!')).toBeDefined();
        await this.backtoproducts_button.click()
    }

}