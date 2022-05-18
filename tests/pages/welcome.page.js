import Base from './base.page';

class Welcome extends Base {

    constructor() {
        super();
        this.exp = {
            URL: 'welcome'
        };
    }

    checkURL() {
        expect(browser).toHaveUrlContaining(this.exp.URL);
    }
}

export default new Welcome;