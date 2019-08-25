import BasePage from './BasePage'

class LoginPage extends BasePage {
    
    get loginform() {
        return $('#login_form')
    }

    get username() {
        return $('#user_login')
    }

    get password() {
        return $('#user_password')
    }
    
    get submitButton() {
        return $('.btn-primary')
    }

    get errorMessage() {
        return $('.alert-error')
    }

    get forgottenPasswordLink() {
        return $('*=Forgot your password ?')
    }

    open() {
        super.open('http://zero.webappsecurity.com/login.html')
    }

    loginToApplication(username, password) {
        this.loginform.waitForExist()
        this.username.setValue(username)
        this.password.setValue(password)
        this.submitButton.click()
    }



}

export default new LoginPage()
