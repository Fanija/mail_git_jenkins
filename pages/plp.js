const { test, expect } = require('@playwright/test');

exports.PlpPage = class PlpPage{
    

    constructor(page) {

        this.page = page
        this.productOne = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.productTwo = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.cart_icon = page.locator('a').filter({ hasText: '2' })

    }
    
    async plp(productOne, productTwo){
        await this.productOne.click()
        await expect(this.page.getByRole('link', { name: 'add-to-cart-sauce-labs-backpack' })).toBeDefined();
        await this.productTwo.click()
        await expect(this.page.getByRole('link', { name: 'add-to-cart-sauce-labs-bike-light' })).toBeDefined();
        await this.cart_icon.click()
        await expect(this.page.locator('#shopping_cart_container')).toBeVisible();
    }

}