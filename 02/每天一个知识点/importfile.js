require('chromedriver');
var webdriver = require('selenium-webdriver');
var By=webdriver.By;
var driver=new webdriver.Builder().forBrowser('chrome').build();

driver.get("https://autowebtest.github.io/add-remove/index.html");

var data=require('./data.json')
// console.log(data.info);
for (var info of data.info){
    // console.log(info)
    driver.findElement(By.id("text")).sendKeys(info);
    driver.findElement(By.id("text")).submit();
}
    driver.findElements(By.className("new-item")).then(function(a){
    console.log("length: ",a.length);
})
driver.findElement(By.css("body > div > div.reminder-container > footer > span")).getText().then(function(text){
    console.log("text: ",text);
})
driver.takeScreenshot().then(function(a){
    require("fs").writeFile("out1.png",a,"base64");
})
driver.findElement(By.css("body > div > div.reminder-container > footer > button")).click();
driver.switchTo().alert().accept();

