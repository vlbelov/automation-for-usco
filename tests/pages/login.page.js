import creds from '../data/credentials';
import Base from './base.page';

class Login extends Base {

    constructor() {
        super();
        this.exp = {
            URL: 'https://www.facebook.com/',
            pageTitle: 'Facebook - log in or sign up'
        };
    }
    
    get page() { return $('#facebook') }
    get logo() { return $('[alt="Facebook"]') }
    get emailField() { return $('#email') }
    get passField() { return $('#pass') }
    get btnLogin() { return $('[name="login"]') }
    get btnForgot() { return $('._6ltj') }
    get textUnderLogo() { return $('._8eso') }
    
    
    
    openPage() {
        browser.url('/');
    }

    pageTitleIsCorrect() {
        expect(browser).toHaveTitle(this.exp.pageTitle);
    }

    logoIsDispalyed() {
        expect(this.logo).toBeDisplayed();
    }

    checkURL() {
        expect(browser).toHaveUrl(this.exp.URL);
    }

    emailFieldIsDisplayed() {
        expect(this.emailField).toBeDisplayed();
    }

    passwordFieldIsDisplayed() {
        expect(this.passField).toBeDisplayed();
    }

    btnLoginIsDisplayed() {
        expect(this.btnLogin).toBeDisplayed();
    }

    btnForgotIsDisplayed() {
        expect(this.btnForgot).toBeDisplayed();
    }

    textUnderLogoIsDisplayed() {
        expect(this.textUnderLogo).toBeDisplayed();
    }

    trueLogin() {
        this.emailField.setValue(creds.trueData.email);
        this.passField.setValue(creds.trueData.password);
        this.btnLogin.click();
    }

}

export default new Login;