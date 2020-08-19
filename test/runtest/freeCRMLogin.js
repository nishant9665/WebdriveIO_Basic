var base = require("../pages/base")
describe('webdriver.io page2', () => {
    it('should have the right title', () => {

        base.intilization();
       // browser.url('https://ui.freecrm.com/')
        console.log("title is ############# "+browser.getTitle())
        expect(browser).toHaveTitle('Cogmento CRM');
        const userName = $('[name="email"]')
        userName.addValue('nishant9665@gmail.com')
        const password = $('[name="password"]')
        password.addValue('Test@123')

        const clickBTn = $('[class="ui fluid large blue submit button"]')
        clickBTn.click()  
    })
})