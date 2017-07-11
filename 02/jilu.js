
imzengyang @imzengyang 15:18
require('chromedriver');

var webdriver = require('selenium-webdriver');
var By =webdriver.By;

// 
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("http://localhost:4000");

// driver.findElement(By.css('#main-nav > a:nth-child(2)')).click();

// driver.findElement(By.css('#main-nav > a:nth-child(3)')).click();

// classname
// driver.get("file:///Users/zack-zhao/Desktop/autotest/02/test.html");
// driver.findElement(By.className('bing')).click();

//  id

// driver.findElement(By.id('nav-search-btn')).click();
// driver.get("file:///Users/zack-zhao/Desktop/autotest/02/test.html");
// driver.findElement(By.linkText("baidu-page")).click();
// driver.findElement(By.partialLinkText("baidu")).click();


// // name
// driver.findElement(By.id('nav-search-btn')).click();
// driver.findElement(By.name('q')).sendKeys('helloworld');

// driver.findElement(By.tagName('button')).click();

driver.findElement(By.xpath('//*[@id="post-test05"]/div[2]/header/h1/a')).click();




var arr = ["helloword", "test","test01"];


for(var i=0; i<3; i++){
   driver.get("http://localhost:4000");
   driver.findElement(By.id("nav-search-btn")).click();
   driver.findElement(By.name("q")).sendKeys(arr[i]); 
}