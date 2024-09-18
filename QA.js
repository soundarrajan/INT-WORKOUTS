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
