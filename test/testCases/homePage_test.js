const homepage =require("../pages/homePage");
const mainPage=require("../pages/mainHomePage")
const base = require("../pages/base")

describe("home page element handle ",function(){
it("verify login Page",function(){
   // browser.url('https://ui.freecrm.com/')
    base.intilization();
  //  homepage.useName.addValue('nishant9665@gmail.com')
    userNameSendKeys('nishant9665@gmail.com')
    
    homepage.password.addValue('Test@123')
    homepage.clickbtn.click()
    console.log("hii im Nishant")
    })

})