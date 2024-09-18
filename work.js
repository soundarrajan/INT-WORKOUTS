////////// closure
function parentFunc(x){
    let var1 = 'test';
    function childFunc(){
        console.log(var1+','+x);
    }
    return childFunc;
}

var callfunc = parentFunc(4);
callfunc();
/////////////////

function parentFunc1(x){
    let var1 = 'test222';
    function childFunc(){
        console.log(var1+','+x);
    }
    childFunc();
}

parentFunc1(4);
///////////////////////////////////////// currying

let multiply = function(x,y){
  console.log(x*y);
}
multiply(2,3);

//// by bind

let multiply1 = function(x,y){
    console.log(x*y);
  }

  let test2 = multiply1.bind(this,2);
  test2(8);

//   let test2 = multiply1.bind(this,2,3);
//   test2();

//   let test2 = multiply1.bind(this);
//   test2(8,2);

  //// by closure


  let multiply2 = function(x){
    return function(y){
        console.log('closure',x*y);
    }
  }

//   let test3 = multiply2(2);
//   test3(4);

  multiply2(2)(4);

  //////////////////// prototype and prototypal inheritance

  var object1 = {
    name:"soundar",
    city:"chennai",
    details:function(){
        console.log(`${this.name} and ${this.city}`)
    }
  }

  console.log(object1.name);
  object1.details();

  var object2 = {
    name:"rajan"
  }

  object2.__proto__ = object1;

  object2.name // soundar
  object2.details(); //rajan and chennai

  /////////

//   The super function is used to call the constructor and methods of the parent class.
// Methods in the child class can override methods in the parent class, and super can be used 
// to call the parent methods from the child class.
/*
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      super.speak(); // Call the parent class method
      console.log(`${this.name} meows.`);
    }
  }
  
  const myCat = new Cat('Whiskers');
  myCat.speak(); // "Whiskers makes a noise." followed by "Whiskers meows."


  //Static methods are called on the class itself and can also be inherited.

  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    static identify() {
      console.log('This is a vehicle.');
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, doors) {
      super(make, model);
      this.doors = doors;
    }
  }
  
  Vehicle.identify(); // "This is a vehicle."
  Car.identify();     // "This is a vehicle."
  
  
*/
/////////////////////// debounce

const getData = () =>{
  console.log("fetch data");
}

const debounceFunc = function(fn,delay){
  let timer;
    return function(){
      clearTimeout(timer);
      timer = setTimeout(() =>{
        fn.apply(this,arguments);
        //fn();
      },delay)
    }
}

const triggerFunc = debounceFunc(getData,500)