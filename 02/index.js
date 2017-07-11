require('chromedriver');
var webdriver=require('selenium-webdriver'); //变量储存
var By =webdriver.By;



var driver =new webdriver.Builder().forBrowser('chrome').build();//创建一个新的浏览器

// driver.sleep(2* 1000).then(function(){
    //return })
  //  driver.findElement(By.css("#main-nav > a:nth-child(2)")).click();
  //  driver.findElement(By.css("#main-nav > a:nth-child(3)")).click();

//   driver.findElement(By.id("#nav-search-btn")).click();
driver.get("file:///Users/sunyu/Desktop/autotest/02/test.html");
// driver.findElement(By.className('baidu')).click();
// driver.get("http://localhost:4000/");
// driver.findElement(By.id('nav-search-btn')).click();
driver.findElement(By.linkText('baidu')).click();


