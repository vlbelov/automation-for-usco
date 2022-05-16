describe('Base', () => {

    before(() => {
        browser.url('/');
    })

    it('Page title', () => {
        expect(browser).toHaveTitle('Facebook — Выполните вход или зарегистрируйтесь')
    })

    it('Page URL', () => {
        expect(browser).toHaveUrl('https://www.facebook.com/')
    })

})