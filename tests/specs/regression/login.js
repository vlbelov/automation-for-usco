import Login from '../../pages/login.page';

describe('Login', () => {

    describe('App-data', () => {

        before(() => {
            Login.openPage();
        });

        it('Page-title-is-correct', () => {
            Login.pageTitleIsCorrect();
        });

        it('Page-URL-is-correct', () => {
            Login.checkURL();
        });

    });

    describe('Elements-displayed', () => {

        it('Logo', () => {
            Login.logoIsDispalyed();
        });

        it('Email-field', () => {
            Login.emailFieldIsDisplayed();
        });

        it('Password-field', () => {
            Login.passwordFieldIsDisplayed();
        });

        it('Login-button', () => {
            Login.btnLoginIsDisplayed();
        });

        it('Forgot-button', () => {
            Login.btnForgotIsDisplayed();
        });

        it('Text-Under-Logo', () => {
            Login.textUnderLogoIsDisplayed();
        });

    });

    // describe('Elements-values', () => {

    //     it('Email-placeholder', () => {
    //         Login.emailPlaceholder();
    //     });

    //     it('Password-placeholder', () => {
    //         Login.passwordPlaceholder();
    //     });

    //     it('Login-button', () => {
    //         Login.btnLoginText();
    //     });

    //     it('Forgot-button', () => {
    //         Login.btnForgotText();
    //     });

    // });

    // describe('Functionality', () => {

    //     it('Error-appears-both-fields-are-empty', () => {
    //         Login.bothFieldsEmptyError();
    //     });

    //     it('Error-appears-email-is-empty', () => {
    //         Login.emptyEmailError();
    //     });

    //     it('Error-appears-password-is-empty', () => {
    //         Login.emptyPasswordError();
    //     });

    //     it('Error-appears-email-is-incorrect', () => {
    //         Login.incorrectEmailError();
    //     });

    //     it('Error-dissapears-on-input-in-email', () => {
    //         Login.errorMessageDisappearsOnInputInEmail();
    //     });

    //     it('Error-appears-password-is-incorrect', () => { //Both fields with 'a' value now
    //         Login.incorrectPasswordError();
    //     });

    //     it('Error-dissapears-on-input-in-password', () => {
    //         Login.errorMessageDisappearsOnInPassword();
    //     });

    // });

});