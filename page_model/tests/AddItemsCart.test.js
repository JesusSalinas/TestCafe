import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartShoppingPage from '../pages/CartShoppingPage'
import { CREDENTIALS } from '../utils/Constants'
import { URL } from '../utils/Constants'
import { getRandomNumber} from '../utils/helpers'
import { addMultipleItems} from '../utils/helpers'

fixture('Test Scenario: Add items to the shopping cart.')
    .page(URL)
    .beforeEach( async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[0].USERNAME, CREDENTIALS.VALID_USERS[0].PASSWORD)
        await ProductsPage.validateProductsPage()
    })

test('TC#4: Navigate to the Shopping car.', async t => {
    await ProductsPage.navigateToShoppingCart()
    await CartShoppingPage.validateShoppingCartPage()
})

test('TC#5: Add a single item to the shopping cart.', async t => {
    var amountItems = await ProductsPage.getAmountItemsFromInventory()
    var singleItem = await getRandomNumber(amountItems)
    await ProductsPage.addSingleItem(singleItem)
    await ProductsPage.navigateToShoppingCart()
    await CartShoppingPage.validateShoppingCartPage()
    await CartShoppingPage.validateItemsInCartShopping(1)
})

test('TC#6: Add multiple items to the shopping cart.', async t => {
    var amountItems = await ProductsPage.getAmountItemsFromInventory()
    var itemsQuantity = await getRandomNumber(amountItems)
    await addMultipleItems(itemsQuantity)
    await ProductsPage.navigateToShoppingCart()
    await CartShoppingPage.validateShoppingCartPage()
    await CartShoppingPage.validateItemsInCartShopping(itemsQuantity)
})