import Base from './base.page';

class Home extends Base {

    constructor() {
        super();
        this.exp = {
            headingText: 'Connect with friends and the world around you on Facebook.',
            loginBtnTitle: 'Log In',
            loginBtnColor: '#1877f2',
            loginBtnFontSize: '20px',
            loginBtnFontColor: '#ffffff',
            loginBtnWidth: '332px',
            createBtnColor: '#42b73a'
        };
    }

    get page() { return $('#facebook') }
    get logo() { return $('[alt="Facebook"]') }
    get headingText() { return $('h2') }
    get emailField() { return $('#email') }
    get passField() { return $('#pass') }
    get btnLogin() { return $('[name="login"]') }
    get btnForgot() { return $('*=Forgot') }
    get btnCreate() { return $('[data-testid="open-registration-form-button"]') }
    get celebrityText() { return $('#reg_pages_msg') }

    openPage() {
        browser.url('/');
    }

    //Page design
    logoIsDispalyed() {
        expect(this.logo).toBeDisplayed();
    }

    headingIsDisplayed() {
        expect(this.headingText).toBeDisplayed();
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

    btnCreateIsDisplayed() {
        expect(this.btnCreate).toBeDisplayed();
    }

    celebrityTextIsDisplayed() {
        expect(this.celebrityText).toBeDisplayed();
    }

    //Element properties

    checkBtnLoginTitle() {
        expect(this.btnLogin).toHaveText(this.exp.loginBtnTitle);
    }

    checkBtnLoginColor() {
        const property = this.btnLogin.getCSSProperty('background-color')
        expect(property.parsed.hex).toBe(this.exp.loginBtnColor)
    }

    checkBtnLoginFontSize() {
        const property = this.btnLogin.getCSSProperty('font-size')
        expect(property.value).toBe(this.exp.loginBtnFontSize)
    }

    checkBtnLoginFontColor() {
        const property = this.btnLogin.getCSSProperty('color')
        expect(property.parsed.hex).toBe(this.exp.loginBtnFontColor)
    }

    checkBtnLoginWidth() {
        const property = this.btnLogin.getCSSProperty('width')
        expect(property.value).toBe(this.exp.loginBtnWidth)
    }

    checkBtnCreateColor() {
        const property = this.btnCreate.getCSSProperty('background-color')
        expect(property.parsed.hex).toBe(this.exp.createBtnColor)
    }

    //Login form validation
    setEmail(value) {
        this.emailField.setValue(value);
    }

    setPassword(value) {
        this.passField.setValue(value);
    }

    clickLoginBtn() {
        this.btnLogin.click();
    }

}

export default new Home;