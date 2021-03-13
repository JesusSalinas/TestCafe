import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../utils/Constants'
import { URL } from '../utils/Constants'

fixture('Login and feature testing')
    .page(URL)

test('Users can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[0].USERNAME, CREDENTIALS.VALID_USERS[0].PASSWORD)
    await ProductsPage.validateProductsPage()
})

test('Users try to login using invalid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await LoginPage.validateErrorMessageInvalidLogin()
})