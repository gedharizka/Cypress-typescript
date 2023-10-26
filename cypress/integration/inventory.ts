import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('User success add multiple product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.add2ItemToCart()
    dashboardPage.assetAddItem()
})

it('User cant add product more than 2 product', () => {
    loginPage.login(URL,'problem_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.invalidAddItemToCart()
    dashboardPage.assetAddItem()
})

