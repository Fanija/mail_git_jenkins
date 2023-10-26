const { test, expect } = require('@playwright/test');

exports.OverviewPage = class OverviewPage{

    constructor (page) {

        this.page = page
        this.finish_button = page.locator('[data-test="finish"]')
    }

    async overview(finish_button){
        await expect(this.page.getByText('Checkout: Overview')).toBeVisible();
        await this.finish_button.click()
        

    }




}