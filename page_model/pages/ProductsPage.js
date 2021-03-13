import {Selector, t} from 'testcafe'

class ProductsPage {
    constructor(){
        this.appLogo = Selector('.app_logo')
        this.titlePage = Selector('div#inventory_filter_container > .product_label')
        this.menuButton = Selector('button#react-burger-menu-btn')
        this.sorterButton = Selector('div#inventory_filter_container > .product_sort_container')
        this.shoppingCarIcon = Selector('svg[role="img"]')
        this.logoutLink = Selector('a#logout_sidebar_link')
    }

    async validateProductsPage() {
        await t
            .expect(this.appLogo.exists).ok()
            .expect(this.titlePage.exists).ok('Products')
            .expect(this.sorterButton.exists).ok()
            .expect(this.shoppingCarIcon.exists).ok()
    }
}
export default new ProductsPage