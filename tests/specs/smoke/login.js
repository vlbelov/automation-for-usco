import Login from '../../pages/login.page';
import Main from '../../pages/main.page';

describe('Login', () => {

    before(() => {
        browser.url('/');
    });

    it('Successful login', () => {
        Login.openPage();
        Login.checkURL();
        Login.trueLogin();
        Main.checkFBButton();
    });


});