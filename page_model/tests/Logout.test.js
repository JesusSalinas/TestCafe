import LoginPage from '../pages/LoginPage'
import LogoutPage from '../pages/LogoutPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'
import { URL } from '../data/Constants'

fixture('Logout  feature testing')
    .page(URL)

test
    .before(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[0].USERNAME, CREDENTIALS.VALID_USERS[0].PASSWORD)
        await ProductsPage.validateProductsPage()
    })
    ('Users do the logout for the application', async t => {
        await LogoutPage.logoutApplication()
        await LoginPage.validateLoginPage()
})