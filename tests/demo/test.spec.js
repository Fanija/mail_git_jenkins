import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.js';
import { PlpPage } from '../../pages/plp.js'
import { CartPage } from '../../pages/cart.js';
import { CheckoutPage } from '../../pages/checkout.js';
import { OverviewPage } from '../../pages/checkoutOverview.js';
import { CompletePage } from '../../pages/checkoutComplete.js';
import { LogoutPage } from '../../pages/logout.js';

test('test', async ({ page }) => {

  const Login = new LoginPage(page)
  const plp = new PlpPage(page)
  const Cart = new CartPage(page)
  const checkout = new CheckoutPage(page)
  const overview = new OverviewPage(page)
  const complete = new CompletePage(page)
  const logout = new LogoutPage(page)

  await Login.gotoLoginPage()
  await Login.login('standard_user', 'secret_sauce')
  await plp.plp('productOne', 'productTwo')
  await Cart.cart('checkout_button')
  await checkout.checkout('test', 'testing', '12345')
  await overview.overview('finish_button')
  await complete.complete('backtoproducts_button')
  await logout.logout('openMenu_button', 'logout_button')


});