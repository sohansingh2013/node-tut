console.log("Welcode to node JS to run in terminal- node .\index.js ");
var a=20 ;
var b=30;
var c= 40;
// console.warn(a+b+c);

var x = '70';
// === to cheack the value type also if else condation
if(x===70)
{
    console.log(" not Match");
}
var x= 20;
if(x==20)
{
  //  console.log("Match");
}
// for loop exmple
for(i=0;i<=10;i++)
{
  //  console.log(i);
}
// arry define and filter uses 
const arr =[2,4,7,1,3,8,9,3];
//console.log(arr);
//console.log(arr[2]);

arr.filter((item)=>{
  //  console.log(item);
  
})

let result = arr.filter((item)=>{

   // return item ===3
   // return item >4
    return item >=4
  })
 // console.log(result);

// imports the class or prog or function in node js
const app = require('./app')

//console.log(app);
//console.log(app.z());
//console.log(app.x);
//console.log(app.y);

// Globle and non globle function crete the file , check the file name and directory

const fs1 = require('fs');
console.log("Consloe is globle function no need to import");
fs1.writeFileSync("hello.txt","This message need to write in file - code step by step  file syste is need to import that means non globle");
console.log("->>", __dirname);
console.log("->>>", __filename);

const fs = require('fs').writeFileSync;
fs("abc.txt", "this way also create the file");

// Make basic server output on browser and stop the node js server to use the ctr +c
// http://localhost:4500/

const http = require('http');

// Tis is use arrow function .....
//http.createServer((req , resp) => {
    //resp.write("<h1>Hello this is sohan singh....</h1>");
     //resp.end();
 // }).listen(4500);

// anoter way to pass the req and response  without arrow function 

function dataControl (req , resp)
{
    resp.write("<h1>Hello , This is Sohan Kumar Singh....</h1>");
    resp.end();
}

 // http.createServer(dataControl).listen(4500);

// all About Package .json
// git configration done
