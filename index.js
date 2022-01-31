// //ways to print in JS
// console.log("Hello World");
// //alert("Hey There");
// //document.write('this is document write');

// //JS console api
// console.log("Hello World", 4, "another log");
// console.warn('this is a warning');
// console.error('this is a warning')

// //JS Variables
// var num1 = 50;
// var num2 = 40;
// console.log(num1 + num2);

// var marks = {
//     ravi: 50,
//     kiran: 67,
//     hitesh: 90
// }
// console.log(marks);

// /* data types
// Primitive - undefined,null,number,string,boolean,symbol
// Reference - Array, object
// */

// //Array Methods
// let myArr = ["Fan","Camera",34,null];

// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("hitesh");
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// //myArr.unshift("hitesh");
// myArr.unshift();
// const newLen = console.log(myArr);
// myArr.sort();
// console.log(myArr);

// //String methods
// let myStr = "I will be back!";
// console.log(myStr.replace("will","shall"));

// //Date
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTimezoneOffset());

// //DOM Manipulation
// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass[0].innerHtml);
// tn = document.getElementsByTagName('div');
// console.log(tn);

// sel = document.querySelector('.container');
// console.log(sel);

// //Events in JS
// function clicked(){
//     console.log('the button was clicked');
//   // alert('button was clicked');
// }
// // window.onload = function(){
// //     console.log('dociument was loaded');
// // }

// firstContainer.addEventListener('click',function(){
// console.log('yes, clicked');
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log('mouse hovered');
//     })

//     //setInterval
// //     function sum(a,b){return a+b;}
// //     sum = (a,b) => {return a+b};
// // logit = () =>{console.log('i am your log')};
// //     setTimeout(logit,2000);
// // setInterval(logit,2000);

// //JSON

obj = {phone:9090909090,pin:452012,ward:13,zone:78}
console.log(obj);
jso = JSON.stringify(obj);
console.log(jso);
parsed = JSON.parse(`{"phone":9090909090,"pin":452012,"ward":13,"zone":78}`)
console.log(parsed);



