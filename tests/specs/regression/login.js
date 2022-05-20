import creds from '../../data/credentials';
import Home from '../../pages/home.page';
import Login from '../../pages/login.page';
import Welcome from '../../pages/welcome.page';

describe('Login', () => {

    describe('Page design', () => {

        before(() => {
            Home.openPage();
        });

        it('Logo', () => {
            Home.logoIsDispalyed();
        });

        it('Heading text', () => {
            Home.headingIsDisplayed();
        });

        it('Email field', () => {
            Home.emailFieldIsDisplayed();
        });

        it('Password field', () => {
            Home.passwordFieldIsDisplayed();
        });

        it('Login button', () => {
            Home.btnLoginIsDisplayed();
        });

        it('Forgot password button', () => {
            Home.btnForgotIsDisplayed();
        });

        it('Create new account button', () => {
            Home.btnCreateIsDisplayed();
        });

        it('Celebrity page text', () => {
            Home.celebrityTextIsDisplayed();
        });

    });

    describe('Element properties', () => {

        it('Login button title', () => {
            Home.checkBtnLoginTitle();
        });

        it('Login button color', () => {
            Home.checkBtnLoginColor();
        });

        it('Login button font size', () => {
            Home.checkBtnLoginFontSize();
        });

        it('Login button font color', () => {
            Home.checkBtnLoginFontColor();
        });

        it('Login button width', () => {
            Home.checkBtnLoginWidth();
        });
        
        it('Create button color', () => {
            Home.checkBtnCreateColor();
        });

        //---same for other elements---

    });

    describe('Login form validation', () => {

        it('Invalid email and any password', () => {
            Home.setEmail('AAA' + creds.trueData.email);
            Home.setPassword(creds.trueData.password + '123')
            Home.clickLoginBtn()
            Login.notMeLinkIsNotDispalyed()
        });

        it('Valid email and invalid password', () => {
            Home.setEmail(creds.trueData.email);
            Home.setPassword(creds.trueData.password + '123')
            Home.clickLoginBtn()
            Login.notMeLinkIsDispalyed()
        });

        it('Valid email and valid password', () => {
            Home.setEmail(creds.trueData.email);
            Home.setPassword(creds.trueData.password)
            Home.clickLoginBtn()
            Welcome.checkURL()
        });

    });

});