alert(1);


console.log("Hello World");

var name = "SeedKun"
console.log(`変数nameの中身：${name}`);

var lastName = "具志堅"
var firstName = "雅子"
console.log(lastName + firstName);

var x = 10;
var y = 2;
console.log(x + y);

var x = 10;
var y = 2;
console.log(x - y);

var x = 10;
var y = 2;
console.log(x * y);

var x = 10;
var y = 2;
console.log(x / y);

var x = 10;
var y = 3;
console.log(x % y);

var x = 11;
var y = 13;
var z =x * y;
console.log(z);

var x = 3;
console.log(x * 1);
console.log(x * x);
console.log(x * x * x);

var x = 7;
var y = 4;
if (x > y) {
    console.log("xはyより大きい。");
}

var x = 8;
var y = 5;
if (x >= y) {
    console.log("xはy以上");
}else {
    console.log("xはyより小さい");
}

var x = 4;
if (x % 2 ==0) {
    console.log("偶数です");
}else {
    console.log("奇数です");
}

var x = 6;
if (x % 3 ==0) {   
    console.log("3の倍数です");
}else if (x % 5 ==0) {
    console.log("5の倍数です");
}else {
    console.log("3と5の倍数意外です");
}

var x = 12;
if (10 <= x && x <= 20) {
    console.log("10以上かつ20以下です");
}

var x = 14;
if (100 <= x || x <= 10) {
    console.log("100以上または10以下です");
}

var x = "男";

switch (x) {
	case "男":
		console.log("male");
		break;
	case "女":
		console.log("female");
		break;
	default:
		console.log("性別不詳");
		break;
}

var x = 10;

switch (x) {
    case 1:
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;
    case 3 :
        console.log("March");
        break;
    case 4 :
        console.log("April");
        break;
    case 5 :
        console.log("May");
        break;
    case 6 :
        console.log("June");
        break;
    case 7 :
        console.log("July");
        break;
    case 8 :
        console.log("August");
        break;   
    case 9 :
        console.log("September");
        break;
    case 10 :
        console.log("October");
        break;
    case 11 :
        console.log("November");
        break;
    case 12 :
        console.log("December");
        break;
    default:
        console.log("月が存在しません");
        break;
}

for (var i = 1; i <= 10; i++){
    console.log("hoge");
}

for (var i = 1; i < 10; i++){
    console.log(i);
}

for (var i = 2; i <= 9; i++){
    console.log(i * 2);
}

for (var i = 1; i <= 100; i++){
    if (i % 2 ==0){
    console.log(i);
    }
}

for (var i = 1; i <= 100; i++){
    if (i % 2 == 0){
    console.log(i);
    }else {
        console.log("奇数です");
    }
}

for (var i = 1; i <= 100; i++){
    if (i % 3 ==0){
    console.log(i);
    }
}

for (var i = 1; i <= 100; i++){
    if (i % 3 ==0 && i % 5 ==0){
    console.log(i);
    }
}

for (var i = 1; i <= 100; i++){
    if (i % 3 ==0){
        console.log("Fizz");
    }else {
        console.log(i);
    }
}

for (var i = 1; i <= 100; i++){
    if (i % 3 ==0 && i % 5 ==0){
        console.log("FizzBuzz");
    }else if(i % 3 ==0){
        console.log("Fizz");
    }else if (i % 5 ==0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}

for (var i = 1; i <= 9 ;i++){
    for(var j = 1; j <= 9; j++){
        console.log(i * j)
    }
}

for (var i = 1; i <=  20;i++){
    for(var j = 2; j <= 20; j++){
        console.log(i * j)
    }
}

for (var i = 1; i <=  30;i++){
    for(var j = 3; j <= 30; j++){
        console.log(i * j)
    }
}

for (var array = 1; array <= 10; array++ ){
    console.log(array);
}

var array = ["A", "B", "C", "D", "E"];

var animals = ["dog", "fox", "monkey"];

animals.push("elephant");
console.log(animals);

animals[0] = "cat";
console.log(animals);

animals.splice(1, 1);
console.log(animals);


for (animal of animals) {
    console.log(animals);
}

for (animal of animals) {
    if (animal != "fox"){
        console.log(animal);
    }
}

var arashi = ["satoshi", "sho", "masaki", "kazunari", "jun"];

for (arashi of arashi) {
    console.log(arashi);
}

var alphabet = {"a": "A", "b": "B", "c": "C", "d": "D"};

alphabet["e"] = "E";
console.log(alphabet);

alphabet[0] = "AAA";
console.log(alphabet);

delete alphabet ["b"];
console.log(alphabet);

for (var key in alphabet){
    console.log(key);
}

for (var key in alphabet){
    console.log("値は" + alphabet[key] );
}

for (var key in alphabet){
    console.log(key + ":" + alphabet[key]);
}

for (var key in alphabet){
   if (key != "c") { 
       console.log(key + ":" + alphabet[key]);
      }
}

for (var key in alphabet){
    if (alphabet[key] != "B") { 
        console.log(key + ":" + alphabet[key]);
       }
 }

 for (var key in alphabet){
    if (key != "b" && alphabet[key] != "C" ) { 
        console.log(key + ":" + alphabet[key]);
       }
 }


 function printHoge(){
     console.log("Hoge");
 }

 printHoge();

 function printNum(number){
     console.log(number);
 }

 printNum(3);

 function  printKuku(number) {
    for (var i = 1; i <= 9; i++){
        console.log(number * i)
    } 
 }

 printKuku(6);

 function printlsEven(number){
     if (number % 2 == 0){
         console.log("偶数です");
     }else {
         console.log("奇数です");
     }
 }

 printlsEven(7);

 function printMessage(hei, rol){
     for (var i = 0; i < rol; i++){
         console.log(hei);
     }
 }

 printMessage("ABC", 3);

function printMaxNum(num1, num2) {
    if (num1 < num2) {
        console.log(num2);
    } else {
        console.log(num1);
    }
}

 pintMaxNum(2, 5);

 function getSquared(num) {
     return num * num
 }

var result = getSquared(7);
console.log(result);
function createSelfIntroductionText(name){
    var msg = "私の名前は"　+ "です";
    return msg;
}

var message = createSelfIntroductionText("NexSeed");
console.log(message);

function isEvenNumber(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var result = isEvenNumber(9);
console.log(result);

function isSeedKun(str) {
    if (str == "SeedKun") {
        return true;
    } else {
        return false;
    }
}

var result = isSeedKun("SeedKun");
console.log(result);