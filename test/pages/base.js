class Base{

    // constructor(){
    //     browser.deleteCookies();
    //     browser.maximizeWindow();
    //     browser.url('https://ui.freecrm.com/')
       
    // }
intilization(){
        browser.deleteCookies();
        browser.maximizeWindow();
        browser.url('https://ui.freecrm.com/')
        browser.setTimeout({ 'pageLoad': 10000 })
        console.log("this is setup completed")
       
}
 
}
module.exports = new Base();