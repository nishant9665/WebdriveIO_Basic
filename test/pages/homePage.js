class HomePage{

    get useName() {return $("//input[@name='email']")}
    get password() {return $("//input[@name='password']")}
    get clickbtn() {return $("//div[@class='ui fluid large blue submit button']")}
}


module.exports= new HomePage();

function userNameSendKeys(userN) {
    this.useName.addValue(userN);
}