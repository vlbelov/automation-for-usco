import Base from './base.page';
class Main extends Base {

    constructor() {
        super();
        this.exp = {
            
        };
    }

    get fbButton() { return $('.a8c37x1j') }

    checkFBButton() {
        expect(this.fbButton).toBeDisplayed();
    }

}

export default new Main;