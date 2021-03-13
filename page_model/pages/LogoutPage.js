import {Selector, t} from 'testcafe'

class LogoutPage {
    constructor(){
        this.menuButton = Selector('button#react-burger-menu-btn')
        this.logoutLink = Selector('a#logout_sidebar_link')
    }

    async logoutApplication() {
        await t
            .click(this.menuButton)
            .click(this.logoutLink)
    }
}
export default new LogoutPage