var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) 
{
  setTimeout(() => console.log(b[i]), 1000);
}

///////////////
for (var i = 0; i < 10; i++) 
{
setTimeout(() => console.log(b[i]), 1000);
}
//////////////////////////////////////

function runFunc(){
  
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");  
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
}    
runFunc()
//////////////////////////////////////////
// given an array of integers, return a new array where each element at index i is the product
// of all numbers in original array except the one at i

// i/p: [1,2,3,4,5]
// o/p:  [120,60,40,30,24]

// i/p: [3,2,1]
// o/p: [2,3,6]

/////////////////////////////////////////////


const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')
const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.any([promise3, promise4])
	return [res1, res2]
}
runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
 
// // A: [['First', 'Second'], ['Fourth']]
// // B: [['First', 'Second'], ['Third', 'Fourth']]
// // C: [['First', 'Second']]
// // D: 'Third'
/////////////////////////////////////////////////////////////
const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}
user.updateEmail("new@email.com")
console.log(user.email)
 
// // A: my@email.com

// // B: new@email.com

// // C: undefined

// // D: ReferenceError
///////////////////////////////////////////////////////////////
let randomValue = { name: "Lydia" }
randomValue = 23
if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}


///////////////////////////////////////

/*
filter an object element which has a specific condition
nested object
iterate
filter a eleemnt based on property.

*/
//////////////////////////////////
let array = [1,2,[3,4,[5,6]]];
//to flat



// function flatfunc(){
//     var flat = [];
// return array.map((item) => {
//     if(Array.isArray(item)){
//         flatfunc(item)
//     }else{
//         flat.push(item);
//     }
//     return flat;
// })
// }

// console.log(flatfunc());

function flattenArray(arr) {
	return arr.reduce((acc, val) => 
	  Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
  }
  
  const nestedArray = [1, 2, [3, 4, [5, 6]]];
  const flatArray = flattenArray(nestedArray);
  console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
////////////////////////////////////

let arrays = ['test1','tested2'];

function arrayLength(array){
    return array.map( item => item.length)
}

console.log(arrayLength(arrays));
//////////////////////////
let string = 'Tenet';
function palindrome(string){
    let strLower = string.toLowerCase();
    let splitStr = strLower.split('').reverse().join('');
    if(strLower === splitStr){
        return 'its palindrome';
    } else{
        return "not a palindrome";
    }
    //return splitStr;
    
}
console.log(palindrome(string));
/////////////////////////////////////////////////////

//First letter of firstname and first letter of last exclude salutation and initials.

let fullname = 'Aoundar Mrs xRajan';

function fullnameInitial(fullname){
    const salutation = ['Mr.','Ms.','Mrs.'];
    const fullanameArray = fullname.split(' ');
    const array = fullanameArray.filter((item) => !salutation.includes(item));
    return array[0][0].toUpperCase() + array[array.length-1][0].toUpperCase()

}

console.log(fullnameInitial(fullname));
////////////////////////////////////////////////////////////////
/// to filter out initials

let fullnames = 'Aoundar hRajan.m';

function fullnameInitial(fullname){
   
    const newarr = fullname.replace('.',' ').split(' ').filter((item) => item.length>1);
    return newarr[0][0].toUpperCase() + newarr[newarr.length-1][0].toUpperCase()

}

console.log(fullnameInitial(fullnames));
///////////////////////
console.log("1" + 1); 
console.log("A" - 1);
console.log(2 + "-2" + "2");
console.log("Hello" - "World" + 78);
console.log("Hello"+ "78");
  
  // 11
  // NAN
  //2-22
  //NAN
  //Hello78

  console.log([]+[]) // empty string
  typeof undefined //'undefined'
  typeof null  //'object'
  console.log(2+2+'2')  // 42
  typeof NAN //'undefined'
  console.log("2" +1 -1); // 20  + convert to string , - convert to number.
  console.log([] +{}) //[object Object]
  console.log(2+'2'-1) // 21
  console.log("2" -1 +1) //2

  Boolean([])
//true
Boolean('')
//false/
Boolean({})
//true

typeof typeof 1
//'string'
typeof typeof ''
//'string'
typeof typeof []  // typeof [] = 'object'
//'string'
typeof typeof {} // typeof {} = 'object'
//'string'
typeof typeof ''
//'string'
console.log([])
//[]

console.log([]+[]) // empty string


  function greet(){
    return
    {
        message:'Hello'
    };
}
console.log(greet()); // undefined js will add ; at the end of return

////////////////////////
let randomval = 23;
if(!typeof randomval === 'string'){
console.log('not a string');
}else{
console.log('its string');
}
/*
typeof randomval  'number'
!'number' = false;
false === 'string' // false

Boolean('') // false
Boolean('number') // true
*/
///////////////////////////////
const userc = {
    email: 'myemail@gmail.com',
    updateEmail:(email) =>{
    this.email = email;
    }
    }
    user.updateEmail('newEmail@gmail.com')
    console.log(userc.email);

    // arrow function lexical scope is parent here window.
    // so it add email property in window, not in userc obj
    ///////////////////////////////////////////

    const animals ={};
    let dog ={sound:'bark'};
    let cat ={sound:'meow'};
    animals[dog]={...dog,name:'dog'};
    animals[cat]={...cat,name:'cat'};
    console.log(animals[dog]);

    //{sound: 'meow', name: 'cat'}
    //console.log(animals);
    //[object Object]: {sound: 'meow', name: 'cat'}[[Prototype]]: Object

    ///////////////////////////////////////////
    function sum(a,b){
        if(b != undefined){
            return a+b;
        }else{
            return function(b){
                return a+b;
            }
        }
    }
    
    console.log(sum(1,2));
    console.log(sum(1)(2));
    ///////////////////////////////
    console.log(1+"2"+"2")
console.log(1+ +"2"+"2")
console.log(1+ -"1" + "2")
console.log(+"1"+"1"+"2")
console.log("A"-"B"+"2")
console.log("A"-"B"+2)

// 122
// 32
//02
//112
//NAN2
//NAN

///////////////////////////////////////

//TYPE COERSION:

//  + -> convert the other operance to STRING and concateenate
console.log('5' + 2); // '52' (String concatenation)
console.log(5 + '2'); // '52' (String concatenation)

// - -> ( -, *, /), JavaScript tries to convert both operands to numbers.
console.log('5' - 2);  // 3 ('5' is coerced into a number)
console.log('5' * 2);  // 10 ('5' is coerced into a number)
console.log('10' / 2); // 5 ('10' is coerced into a number)


// Unary Plus (+) - used to convert a value to a number.
console.log(+ '5'); // 5 (string '5' is coerced to a number)
console.log(+ true); // 1 (boolean true is coerced to a number)
console.log(+ false); // 0 (boolean false is coerced to a number)

console.log('hello' - 1);  // NaN ('hello' cannot be coerced into a number)
console.log(undefined + 2); // NaN (undefined cannot be coerced into a number)

console.log(null + 2); // 2 (null is coerced into 0)
console.log(undefined + 2); // NaN (undefined cannot be coerced into a number)

console.log(+5);          // 5 (already a number)
console.log(+'5');        // 5 (string '5' is converted to number)
console.log(+true);       // 1 (true is coerced to 1)
console.log(+false);      // 0 (false is coerced to 0)
console.log(+null);       // 0 (null is coerced to 0)
console.log(+undefined);  // NaN (undefined cannot be converted to a number)

console.log(-5);          // -5 (negates the number)
console.log(-'5');        // -5 (string '5' is converted to number, then negated)
console.log(-true);       // -1 (true is coerced to 1, then negated)
console.log(-false);      // 0 (false is coerced to 0, no change)
console.log(-null);       // 0 (null is coerced to 0, no change)
console.log(-undefined);  // NaN (undefined cannot be converted to a number)

// BOOLEAN

console.log(!true);      // false
console.log(!false);     // true
console.log(!0);         // true (0 is falsy)
console.log(!'');        // true (empty string is falsy)
console.log(!1);         // false (1 is truthy)
console.log(!'hello');   // false (non-empty string is truthy)

console.log(!!null); // false


console.log(!!null); // false
console.log(!!''); // flase
console.log(!!1); //true

console.log(+false); //0
console.log(!'ddddd'); // false
////////////////////////////////////////////////////////

let person = {name:'test'};
let members = [person];
person = 'ee';
console.log(members);

// [ { name: 'test' } ]
//////////////////////////

function getArgs(one, two, three){
	console.log(one,two,three);
}

const str1 = "Hello";
const str2 = "World"

getArgs`${str1} is ${str2}`;

// why the output for this function
// ["", " is ", ""], "Hello", "World" 
/////////////////////////////////////////////////////////////////

const a = {};
const b= {a:1};
const c = {c:3};

a[b]=123;
console.log(a); // { '[object Object]': 123 }
a[c]=456;
console.log(a); //{ '[object Object]': 456 }
console.log(a[b]);
///////////////////////////

const person1 = {
    name:'ss',
    hobbies: ['coding']
    }
    
    function addHobby(hobby,hobbies = person1.hobbies){
    hobbies.push(hobby)
    return hobbies
    }
    
    addHobby('run',[]);
    addHobby('dance');
    addHobby('bake',person1.hobbies);
    //[ 'coding', 'dance', 'bake' ]
    //////////////////////////////////////////////////////////////

    const arrayss =[1,2,3,4];
for(let item in arrayss){
    console.log(item) // 0 1 2 3
}
for(let item of arrayss){
    console.log(item) //1 2 3 4
}

