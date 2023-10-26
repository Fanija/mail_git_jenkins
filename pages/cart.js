const { test, expect } = require('@playwright/test');

exports.CartPage = class CartPage {

    constructor (page) {

        this.page = page
        this.checkout_button = page.locator('[data-test="checkout"]')
    }

    async cart(checkout_button){
        await expect(this.page.getByText('Your Cart')).toBeVisible();
        await this.checkout_button.click();
        
    }

}