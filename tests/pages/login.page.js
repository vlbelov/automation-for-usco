import Base from './base.page';

class Login extends Base {

    get notMeLink() { return $('#not_me_link') }
    get loginForm() { return $('#login_form') }

    openPage() {
        browser.url('/login');
    }

    //Page design
    notMeLinkIsDispalyed() {
        expect(this.notMeLink).toBeDisplayed();
    }

    notMeLinkIsNotDispalyed() {
        expect(this.notMeLink).not.toBeDisplayed();
    }
 
}

export default new Login;