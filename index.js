//Hoisting

// var a= 10;
// {
//   let a= 100;
// }
/*
// console.log(text);  
// console.log(text1);
// console.log(text2);
var text = 'sss';
let text1 = 'ssslet';
const text2 = 'sssconst';

test();
console.log(func1);
func2();

function test(){
    console.log('first js');
}

var func1 = function(){
    console.log('func exp');
}

var func2 = () =>{
    console.log('arrow function');
}

/* ************************************* */

// lexical scope and scope chain - closure


// var sx = 'te';
// function parentFun(){
//     var ss='test';
//    console.log('pa',ss);
//     function innerFunc(){
//         var so ='so';
//        // ss = 'test2';
//         console.log('ch',ss);
//         console.log(so);
//         console.log(sx);
//     }
//     console.log('p1a',ss);
//     return innerFunc;
// }

// var run = parentFun();
// run();
// console.log('ch000',sx);
/************************************************ */

//Blcok scope

// var a= 100;
// let b= 200;
// const c= 300;
// {
//     var a= 10;
//     let b=  20;
//     const c= 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// var a= 100;
// let b= 200;
// const c= 300;
// function test(){
//     var a= 10;
//     let b=  20;
//     const c= 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test();
// console.log(a);
// console.log(b);
// console.log(c);

/************************* */

//CLOSURE:

/// not clusure only lexical scope
 
// function a(){
//     var var1 = 100,z=10;
//     function b(){
//         //console.log(var1);
//         z++;
//         console.log('lexical not closure',z);
//     }
//     b();
//     console.log(var1);
// }

// a();
// a();

// this closure

// function a1(){
//     var var11 = 1000;
//     function b(){
//         //var var11 = 20;
//         console.log(var11);
//         var11++;
//         console.log(var11);
//     }
//     var11 = 888;
//     return b;
// }

// var z = a1();
// z();
// z();


// function a1(var11){
//     //var var11 = 1000;
//     function b(){
//         var var11 = 20;
//         console.log(var11);
//     }
//     //var var11 = 10000;
//     console.log(var11);
//     return b;
// }
// a1('sss')();


// function a(){
//     var s = 100;
//     setTimeout(() =>{
//       s++;
//         console.log(s);
//     },1000)
//     console.log("this is js");
// }
// a();
// a();

// function a(){
//    for(var i=0;i<=5;i++){
//     setTimeout(() =>{
//         console.log(i);
//     },i*1000)
// }
//     console.log("this is js");
// }
// a();

// function a(){
//     for(let i=1;i<=5;i++){
//      setTimeout(() =>{
//          console.log(i);
//      },i*1000)
//  }
//      console.log("this is js");
//  }
//  a();


// function a(){
//    for(var i=0;i<=5;i++){
//     function b(i){
//     setTimeout(() =>{
//         console.log(i);
//     },i*1000)
//    }
//    b(i)
// }
//     console.log("this is js");
// }
// a();
/******************** */

//FIRST CLASS FUNCTION

// function a(x){
//     console.log(x);
// }

// a(function(){})
/***************** */

//CALL BACK FUNCTION

// setTimeout(function(){
//     console.log('z');
// },5000);

// function a(b){
// console.log('a');
// b();
// }

// a( function x(){
//     console.log('100');
// })

/************************** */

//Event listener with call back and closure:

// function addEventListener1(){
//     document.addEventListener('DOMContentLoaded', function() {
//     var count = 0;
//     document.getElementById("btn").addEventListener('click',function x(){
//         console.log('click', ++count);
//     });
// });
// }
// addEventListener1();

/******************** */

///Map:
/*
console.log('MAP');
const arr = [1,2,3,4];

const newArr = arr.map((item) => {
 return item*2;
});

console.log(newArr);
////

const arrno = [2,4,5,6];

const newArrs = arrno.map(function(no){
  return no*3;
})
console.log(newArrs);
///////////////////////////
const news = [1,2,3,4];
const newsArr = news.map(newo => newo*5);
console.log(newsArr);



// filter

const filter = arr.filter((item) => {
 return item %2 != 0;
});
console.log('filter', filter);

const find = arr.find((item) => {
    return item %2 != 0;
   });
   console.log('find', find);

function findMax(arr){
 let max = 0;
 for(i=0;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
    
 }
 return max;
}

console.log('findMax',findMax(arr));
////////////// reduce
const reduceMax = arr.reduce(function(acc,curr){
     if(curr > acc){
        acc = curr;
     }
     return acc;
},0)

console.log('reduce',reduceMax);

///////////////////////

const users = [
{firstName:'name1',lastName: 'lname1',age:20},
{firstName:'name2',lastName: 'lname2',age:30},
{firstName:'name3',lastName: 'lname3',age:40},
{firstName:'name4',lastName: 'lname4',age:40},
{firstName:'name5',lastName: 'lname5',age:50},
{firstName:'name6',lastName: 'lname6',age:50},
];

// first+ lastname

const fullName = users.map((item) =>{
    return item.firstName+' '+item.lastName;
});
//console.log(fullName);


////filter name > 30

const filter30 = users.filter((item) =>{
    return item.age > 30;
}).map((item) =>{
    return item.firstName;
})

console.log('age > 30',filter30);
// age > 30 (4) ['name3', 'name4', 'name5', 'name6']

// same as above using reduce

const reduceFilter = users.reduce(function(acc,curr){
   if(curr.age > 30){
     acc.push(curr.firstName)
   }
   return acc;
},[])

console.log('reduceFilter',reduceFilter);





//////// reduce age: number of times

const reduceAge = users.reduce(function(acc,curr){
     if(acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age];
     } else{
        acc[curr.age] = 1;
     }
     return acc;
},{});

console.log('reducedAge',reduceAge);
// //{
//     "20": 1,
//     "30": 1,
//     "40": 2,
//     "50": 2


/****************promise */
/*
const cart=["items"];
function createOrder(cart){
    const createPromise = new Promise(function(resolve,reject){
        //alert(validCart);
        if(!validCart()){
            const err = new Error('cart not valid');
            reject(err);
        }else{

        const orderId="123";
        if(orderId){
            resolve(orderId);
        }
    }
    })
    return createPromise;
}

function validCart(cart){
    return false;
}

const promise = createOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
})
////////////////////////////////////////////////////////
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log('Data received:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    //////////////////////////////////////////////////

    async function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const data = { id: 1, name: 'John Doe' };
            resolve(data);
          }, 2000);
        });
      }
      
      async function processData() {
        try {
          const data = await fetchData();
          console.log('Data received:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      
      processData();
      
///////////////////////////// promise api
promise.all
promise.allsettled
promise.race 
promise.any 

const p1 = new Promise((resolve,reject) => {
  setTimeout(() => resolve('sucess'),3000)
});

const p2 = new Promise((resolve,reject) => {
  //setTimeout(() => resolve('sucess'),1000)
  setTimeout(() => reject('p2 fail'),1000)
});

const p3 = new Promise((resolve,reject) => {
  setTimeout(() => resolve('sucess'),2000)
});



// Promise.all([p1,p2,p3])
// .then(result => {
//   console.log('promise api',result);
// })
// .catch(err =>{
//   console.error(err);
// })

Promise.allSettled([p1,p2,p3])
.then(result => {
  console.log('promise api',result);
})
.catch(err =>{
  console.error(err);
})

//////////////////////////Async/ Await

async function getData(){
  return 'test';
}

const promiseData = getData();
console.log('async',promiseData);

promiseData.then(data => console.log(data));
/////////////////////////////////////////////////////////

////////////////// Handling promise

const newpromise = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve('success');
  },5000)
  
});

function getDatass(){
  newpromise.then(data => console.log(data));
}

getDatass();

// async/await


async function asyncFunc(){
  const val = await newpromise;
  console.log('async', val)
}

asyncFunc();


/////////////////////// Difference

const newpromise1 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve('success');
  },5000)
  
});

function getDatass1(){
  // JS Engine not wait for promise to be resolved
  newpromise1.then(data => console.log(data));
  console.log('promise handling - nromal');
}

getDatass1();

//Result
//promise handling - nromal // execute
//success // after 5s

// async/await


async function asyncFunc1(){
  const val = await newpromise1;
  console.log('promise handling - async');
  console.log('async', val)
}

asyncFunc1();

// Result;

//after 5s both print
// promise handling - async
// success


///////////////////////////////////////////////

const newpromise111 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve('1111111111111111success');
  },5000)
  
});
const newpromise1111 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve('222222222222222222success');
  },10000)
  
});

async function asyncFunc11(){
  const val = await newpromise111;
  console.log('promise handling - async11111111111111');
  console.log('async', val)

  const val1 = await newpromise1111;
  console.log('promise handling - async2222222222222222222');
  console.log('async', val1)
}

asyncFunc11();
////////////////////////////fetch

fetch('https://api.example.com/data.txt')
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.error('Error:', error));


  ///////////

  fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
*/
  ///////////////////////////

  ///currying - generic implementation

  // function sum(a,b){
  //   return a+b ;
  // }
  // const curryFunc = curriedNew(sum);
  // console.log(curryFunc(2,3));
  // console.log(curryFunc(2)(3));

  // function curriedNew(fn){
  //   return function curry(...args){
  //     if(args.length >= fn.length){
  //       return fn.apply(this,args)
  //     }else{
  //       return function(...newArgs){
  //         return curry.apply(this,args.concat(newArgs))
  //       }
  //     }
  //   }
  // }

  // Arrow functiom:
  
 // ES5 with nested function scope

//  function test(){
//   this.comvar = 'this var';
//   this.testMethod = function(){
//       console.log(this.comvar);
//       const that = this;
//       setTimeout(function(){
//           console.log(this);
//            console.log(that.comvar);
//       },1000)
//   }
// }

// let run = new test();
// run.testMethod();

// //ES6;
// function test(){
//   this.comvar = 'this var';
//   this.testMethod = function(){
//       console.log(this.comvar);
//       setTimeout(() =>{
//           console.log(this);
//            console.log(this.comvar);
//       },1000)
//   }
// }

// let run1 = new test();
// run1.testMethod();