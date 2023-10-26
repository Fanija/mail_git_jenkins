const { test, expect } = require('@playwright/test');

exports.LogoutPage = class LogoutPage{

    constructor (page) {

        this.page = page
        this.openMenu_button = page.getByRole('button', { name: 'Open Menu' })
        this.logout_button = page.getByRole('link', { name: 'Logout' })
    }

    async logout(openMenu_button, logout_button){
        await expect(this.page.locator('#react-burger-menu-btn')).toBeEnabled();
        await this.openMenu_button.click()
        await expect(this.page.getByRole('link', { name: 'Logout' } )).toBeEnabled();
        await this.logout_button.click()


    }


}