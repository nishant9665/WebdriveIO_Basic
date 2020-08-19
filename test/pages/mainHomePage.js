class MainHomePage{

    get tagNameList() {return $$("//div[@id='main-nav']//a//span[contains(text(),'')]")}

}

module.exports= new MainHomePage();