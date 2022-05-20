import creds from '../../data/credentials';
import Home from '../../pages/home.page';
import Welcome from '../../pages/welcome.page';

describe('Login', () => {

    describe('Login form validation', () => {

        it('Successful login', () => {
            Home.setEmail(creds.trueData.email);
            Home.setPassword(creds.trueData.password)
            Home.clickLoginBtn()
            Welcome.checkURL()
        });

    });

});