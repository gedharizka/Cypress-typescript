import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CheckoutPage} from "./pages/checkout_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkout = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('User success checkout step 1', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.add2ItemToCart()
    dashboardPage.assetAddItem()
    checkout.clickCart()
    checkout.clickCheckout()
    checkout.fillInformation('Jack','Sperow','10000')
    checkout.assertCheckoutPage()
})

it('User input empty last name', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.add2ItemToCart()
    dashboardPage.assetAddItem()
    checkout.clickCart()
    checkout.clickCheckout()
    checkout.failFillInformation('Jack','10000')
})


