import {Selector, t} from 'testcafe'

class ProductsPage {
    constructor(){
        this.appLogo = Selector('.app_logo')
        this.titlePage = Selector('div#inventory_filter_container > .product_label')
        this.menuButton = Selector('button#react-burger-menu-btn')
        this.sorterButton = Selector('div#inventory_filter_container > .product_sort_container')
        this.shoppingCartIcon = Selector('svg[role="img"]')
        this.logoutLink = Selector('a#logout_sidebar_link')
        this.shoppingCartTitle = Selector('div#contents_wrapper > .subheader')
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.continueShoppingButton = Selector('.btn_secondary')
        this.quantityLabel = Selector('.cart_quantity_label')
        this.desciptionLabel = Selector('.cart_desc_label')
        this.inventoryList = Selector('div#inventory_container > .inventory_list')
        this.cartList = Selector('.cart_list')
    }

    async validateProductsPage() {
        await t
            .expect(this.appLogo.exists).ok()
            .expect(this.titlePage.exists).ok('Products')
            .expect(this.sorterButton.exists).ok()
            .expect(this.shoppingCartIcon.exists).ok()
    }

    async validateShoppingCartPage() {
        await t
            .expect(this.shoppingCartTitle.exists).ok()
            .expect(this.checkoutButton.exists).ok()
            .expect(this.continueShoppingButton.exists).ok()
            .expect(this.quantityLabel.exists).ok()
            .expect(this.desciptionLabel.exists).ok()
    }

    async navigateToShoppingCart() {
        await t
            .click(this.shoppingCartIcon)
    }

    async getAmountItemsFromInventory() {
        var value = await this.inventoryList.child('.inventory_item').count
        return value
    }

    async validateSingleItemInCart() {
        var value = await this.cartList.child('.cart_item').count
        await t.expect(value).eql(1)
    }

    async addSingleItem(item) {
        await t
            .click(Selector(`div:nth-of-type(${item}) > .pricebar > .btn_inventory.btn_primary`))
    }
}
export default new ProductsPage