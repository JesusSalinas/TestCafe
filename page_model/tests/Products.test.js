import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../utils/Constants'
import { URL } from '../utils/Constants'
import { getRandomNumber} from '../utils/helpers'
import {Selector} from 'testcafe'

fixture('Users choose the items and make the checkout.')
    .page(URL)
    .beforeEach( async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[0].USERNAME, CREDENTIALS.VALID_USERS[0].PASSWORD)
        await ProductsPage.validateProductsPage()
    })

test('Users navigate to Shopping cart page.', async t => {
    await ProductsPage.navigateToShoppingCart()
    await ProductsPage.validateShoppingCartPage()
})

test.only('Add a single item to the shopping cart.', async t => {
    var amountItems = await ProductsPage.getAmountItemsFromInventory()
    var singleItem = await getRandomNumber(amountItems)
    await ProductsPage.addSingleItem(singleItem)
    await ProductsPage.navigateToShoppingCart()
    await ProductsPage.validateShoppingCartPage()
    await ProductsPage.validateSingleItemInCart()
})

//await t.debug()





