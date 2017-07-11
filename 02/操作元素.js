require('chromedriver');
var webdriver=require('selenium-webdriver'); //变量储存
var By =webdriver.By;

var driver =new webdriver.Builder().forBrowser('chrome').build();


var arr=["hello world","xiaoyi","xiaoer"];
for(var i=0;i<3;i++){
    driver.get("http://localhost:4000/");
    driver.findElement(By.id("#nav-search-btn")).click();
    driver.findElement(By.name('q')).sendKeys(arr [i]);
}

// function sayhello(name){
//     console.log('欢迎，',name);
// }
// sayhello('xiaoming')
// sayhello('xiaohong')

// function output(text){
//     console.log(text);
// }
// output('hello丫丫','other text')

// var x=1;
// {
//     var x=2;
// }
// console.log(x);

// let x=1;
// {
//     let x=2
// }
// console.log(x);

// function testbreak(x){
//   var i=0;
//   while(i<6){
    //   if(i==3){
        //   break;
    //   }
    //   i+=1;
//   }
//   return i*x;
// }
// var testresult=testbreak(5)
// console.log(testresult)

// outer_block:{
//     inner_block:{
//         console.log('1');
//         break outer_block;
//         console.log('哈哈');
//     }
//     console.log('2');
// }

// block_1:{
//     console.log('1');
//     break block_2;
// }
// block_2:{
//     console.log('2');
// }

// if(MYFAV=7){
//    let MYFAV=20;
//    console.log("MYFAV is:"+MYFAV);
// //    var MYFAV=20;
//    console.log("my01:"+MYFAV);
// }
// console.log("my02:"+MYFAV);

require("chromedriver");

var webdriver = require('selenium-webdriver');

var By = webdriver.By;

var driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();

driver.get("https://login.taobao.com/");

driver.findElement(By.id('J_Quick2Static')).click();

driver.findElement(By.id('TPL_username_1')).clear();
driver.findElement(By.id('TPL_username_1')).sendKeys("xxxxxxxxxxxx")


driver.findElement(By.id('TPL_password_1')).sendKeys("xxxxxxxxxxx")

driver.findElement(By.id("TPL_password_1")).submit();
// driver.findElement(By.id('J_SubmitStatic')).click();


driver.get("https://s.taobao.com/list?seller_type=taobao&seller_type=taobao&style=grid&style=grid&spm=a217h.8161588.1000187.1&cat=11%2C1101%2C1201%2C14%2C1512%2C20%2C50008090%2C50012164%2C50018222%2C50018264%2C50019780%2C50076292&q=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&suggest=0_1&_input_charset=utf-8&wq=bijiben&suggest_query=bijiben&source=suggest")

driver.findElements(By.css("#listsrp-itemlist > div > div > div.items > div")).then(function(eles){
    console.log("lenght",eles.length)
})

driver.get("https://www.taobao.com/")
driver.findElement(By.css('div.tbh-logo.J_Module.tb-pass > div')).getLocation().then(function(location){
    console.log("localtion: ",location);
})
driver.findElement(By.css('div.tbh-logo.J_Module.tb-pass > div')).getSize().then(function(size){
    console.log('size',size)
})


driver.findElement(By.css('div.tbh-logo.J_Module.tb-pass > div >  h1')).getTagName().then(function(tagname){
    console.log('tagname',tagname)
})


driver.get("https://www.taobao.com/");
driver.findElement(By.css("#J_SearchTab > ul > li.J_SearchTab.tmall-search-tab")).getText().then(function(text){
    console.log("text",text);
})




driver.get('https://autowebtest.github.io/dashboard/user.html')
driver.findElement(By.id("female")).isSelected().then(function(bool){
    console.log("isselected:",bool)
})



driver.get("https://www.taobao.com/")
driver.findElement(By.css('div.tbh-logo.J_Module.tb-pass > div')).getCssValue("height").then(function(value){
    console.log("value: ",value);
})
driver.findElement(By.css('div.tbh-logo.J_Module.tb-pass > div')).getAttribute("class").then(function(attr){
    console.log("attr: ",attr);
})

driver.takeScreenshot().then(function(screen){
    // console.log(screen);
    require('fs').writeFile("out.png", screen,'base64');
})