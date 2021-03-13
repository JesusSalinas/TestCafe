import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameField = Selector('input[name="login.username"]')
        this.passwordField = Selector('input[name="login.password"]')
        this.loginButton = Selector('.btn.btn-lg.btn-primary.button-login')
        this.errorMessage = Selector('div#login-error-message')
    }
}
export default new LoginPage