import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../utils/Constants'
import { URL } from '../utils/Constants'

fixture('Test Scenario: Login into SwagLabs application.')
    .page(URL)

test('TC#1: Login with a valid user.', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[0].USERNAME, CREDENTIALS.VALID_USERS[0].PASSWORD)
    await ProductsPage.validateProductsPage()
})

test('TC#2: Login with an invalid user.', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await LoginPage.validateErrorMessageInvalidLogin()
})