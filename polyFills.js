// let a =[1,2,3];
// Array.prototype.myMap = function(cb){
//     let temp=[];
//     for(let i=0; i< this.length; i++){
//         temp.push(cb(this[i], i, this));
//     };
//     return temp;
// }

// let b = a.myMap((item)=>{
//     return item*2;
// });

// console.log(b);

// Array.prototype.myFilter = function(cb){
//     let temp=[];
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i],i, this)) temp.push(this[i]);        
//     }
//     return temp;
// };

// let c = a.myFilter((item)=>{
//     return item>2;
// })
// console.log(c);


// Array.prototype.myReduce = function(cb, initialValue){
//     let a = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         a= a ? cb(a,this[i],i,this) : this[i]
//     };
//     return a;
// };

// let d= a.myReduce((acc, curr, i)=>{
//     return acc+curr;
// },0);

// console.log(d)

// Array.prototype.myForEach = function(cb){
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i],i, this);        
//     }
// }

// a.myForEach((item,i)=> {
//    a[i]=item*2
// });
// console.log(a);


// let person = {name: "Shreeyansh"};

// // Polyfill for call()
// function printName(age, gender="Male") {
//   console.log(`Hello ` + this.name + " has age: " + age + " "+gender);
// }

// printName.__proto__.myCall = function (ctx = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It is not a callable");
//   }

//   ctx.fn = this;
//   return ctx.fn(...args);
// };

// printName.myCall(person,24);

// Function.prototype.myApply = function (ctx = {}, args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It is not a callable");
//   }

//   ctx.fn = this;
//   return ctx.fn(...args);
// };

// Function.prototype.myBind = function (ctx = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It is not a callable");
//   }

//   ctx.fn = this;
//   return function(...newArgs){
//       return ctx.fn(...args, ...newArgs);
//   };
// };

// printName.myBind(person,16)("Female");



