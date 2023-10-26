const { test, expect } = require('@playwright/test');

exports.CheckoutPage =  class CheckoutPage {

    constructor(page) {

        this.page = page
        this.firstname_textbox = page.locator('[data-test="firstName"]')
        this.lastname_textbox = page.locator('[data-test="lastName"]')
        this.postalcode_textbox = page.locator('[data-test="postalCode"]')
        this.continue_button = page.locator('[data-test="continue"]')

    }

    async checkout(firstname, lastname, postalcode){
        await expect(this.page.getByText('Checkout: Your Information')).toBeVisible();
        await this.firstname_textbox.click()
        await this.firstname_textbox.fill(firstname)
        await this.lastname_textbox.click()
        await this.lastname_textbox.fill(lastname)
        await this.postalcode_textbox.click()
        await this.postalcode_textbox.fill(postalcode)
        await this.continue_button.click()

    }

}