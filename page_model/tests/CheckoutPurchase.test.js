import { standardUser } from '../utils/Roles'
import ProductsPage from '../pages/ProductsPage'
import CartShoppingPage from '../pages/CartShoppingPage'
import CustomerInformationPage from '../pages/CustomerInformationPage'
import OverviewPage from '../pages/OverviewPage'
import SuccessPurchasePage from '../pages/SuccessPurchasePage'
import { getRandomNumber, addMultipleItems } from '../utils/Helpers'

const userInfo = require('../utils/test_data/UserInfo.json');

fixture('Test Scenario: Checkout the purchase.')
    .beforeEach( async t => {
        await t.useRole(standardUser)
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

userInfo.forEach(data => {
    test('TC#8: Fill users information', async t => {
        await CustomerInformationPage.fillInformationForm(data.FIRSTNAME, data.LASTNAME, data.ZIPCODE)
        await CustomerInformationPage.navigateToCheckoutSecondStep()
        await OverviewPage.validateOverviewPage()
    })

    test('TC#9: Final order items', async t => {
        await CustomerInformationPage.fillInformationForm(data.FIRSTNAME, data.LASTNAME, data.ZIPCODE)
        await CustomerInformationPage.navigateToCheckoutSecondStep()
        await OverviewPage.validateOverviewPage()
    })

    test('TC#10: Complete a purchase', async t => {
        await CustomerInformationPage.fillInformationForm(data.FIRSTNAME, data.LASTNAME, data.ZIPCODE)
        await CustomerInformationPage.navigateToCheckoutSecondStep()
        await OverviewPage.finishPurchase()
        await SuccessPurchasePage.validateSuccessPurchasePage()
    })
})

test.skip('TC#8: Fill users information', async t => {
    await CustomerInformationPage.fillInformationForm(USER_INFO[0].FIRSTNAME, USER_INFO[0].LASTNAME, USER_INFO[0].ZIPCODE)
    await CustomerInformationPage.navigateToCheckoutSecondStep()
    await OverviewPage.validateOverviewPage()
})

test.skip('TC#9: Final order items', async t => {
    // await CustomerInformationPage.fillInformationForm('Jesus', 'Salinas', '55100')
    // await CustomerInformationPage.navigateToCheckoutSecondStep()
    // await OverviewPage.validateOverviewPage()
    // await t.debug()
})

test.skip('TC#10: Complete a purchase', async t => {
    await CustomerInformationPage.fillInformationForm('Jesus', 'Salinas', '55100')
    await CustomerInformationPage.navigateToCheckoutSecondStep()
    await OverviewPage.finishPurchase()
    await SuccessPurchasePage.validateSuccessPurchasePage()
})