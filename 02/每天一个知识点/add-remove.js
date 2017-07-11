require("chromedriver");
var webdriver=require("selenium-webdriver");
var By=webdriver.By
var driver=new webdriver.Builder().forBrowser("chrome").build();

driver.manage().window().maximize();
driver.get("https://autowebtest.github.io/add-remove/index.html");

// driver.findElement(By.id("text")).sendKeys("第一次输入");
// driver.findElement(By.id("text")).submit();
//Add,按钮元素怎么定位？使用哪种方法？<input type="submit" value="Add">

var arr=["第一次输入","第二次输入","第三次输入","第四次输入","第五次输入"];
for (var i=0;i<6;i++){
    driver.findElement(By.id("text")).sendKeys(arr[i]);
    driver.findElement(By.id("text")).submit();
}

driver.findElement(By.css("div.reminder-container")).then(function(eles){
    console.log("amount:",eles.length);
})
//定位元素失败
driver.takeScreenshot().then(function(screen){
    require('fs'),weiteFile("jieping.png",screen,'base64');
})
//截屏失败
