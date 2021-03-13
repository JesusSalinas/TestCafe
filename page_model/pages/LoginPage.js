import {Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameField = Selector('input#user-name')
        this.passwordField = Selector('input#password')
        this.loginButton = Selector('input#login-button')
        this.errorMessage = Selector('h3')
    }

    async submitLoginForm(username, password) {
        await t
            .typeText(this.usernameField, username)
            .typeText(this.passwordField, password)
            .click(this.loginButton)
    }

    async validateErrorMessageInvalidLogin() {
        await t
            .expect(this.errorMessage.exists).ok('Epic sadface: Username and password do not match any user in this service')
    }

    async validateLoginPage() {
        await t
            .expect(this.usernameField.exists).ok()
            .expect(this.passwordField.exists).ok()
            .expect(this.loginButton.exists).ok('LOGINppppp6356')
    }
}
export default new LoginPage