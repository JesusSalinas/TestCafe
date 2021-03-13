import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartShoppingPage from '../pages/CartShoppingPage'
import CustomerInformationPage from '../pages/CustomerInformationPage'
import OverviewPage from '../pages/OverviewPage'
import SuccessPurchasePage from '../pages/SuccessPurchasePage'
import { CREDENTIALS } from '../utils/Constants'
import { URL } from '../utils/Constants'
import { getRandomNumber} from '../utils/helpers'
import { addMultipleItems} from '../utils/helpers'

fixture('Test Scenario: Checkout the purchase.')
    .page(URL)
    .beforeEach( async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS[0].USERNAME, CREDENTIALS.VALID_USERS[0].PASSWORD)
        var amountItems = await ProductsPage.getAmountItemsFromInventory()
        var itemsQuantity = await getRandomNumber(amountItems)
        await addMultipleItems(itemsQuantity)
        await ProductsPage.navigateToShoppingCart()
        await CartShoppingPage.navigateToCheckoutFirstStep()
    })

test('TC#7: Continue with missing users infromation.', async t => {
    await CustomerInformationPage.validateCheckoutFirstStep()
    await CustomerInformationPage.navigateToCheckoutSecondStep()
    await CustomerInformationPage.validateErrorMessageMissingInfo()
})

test('TC#8: Fill users information', async t => {
    await CustomerInformationPage.fillInformationForm('Jesus', 'Salinas', '55100')
    await CustomerInformationPage.navigateToCheckoutSecondStep()
    await OverviewPage.validateOverviewPage()
})

test('TC#9: Final order items', async t => {
    // await CustomerInformationPage.fillInformationForm('Jesus', 'Salinas', '55100')
    // await CustomerInformationPage.navigateToCheckoutSecondStep()
    // await OverviewPage.validateOverviewPage()
    // await t.debug()
})

test.only('TC#10: Complete a purchase', async t => {
    await CustomerInformationPage.fillInformationForm('Jesus', 'Salinas', '55100')
    await CustomerInformationPage.navigateToCheckoutSecondStep()
    await OverviewPage.validateOverviewPage()
    await OverviewPage.finishPurchase()
    await SuccessPurchasePage.validateSuccessPurchasePage()
})