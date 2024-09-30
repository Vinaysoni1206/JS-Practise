let user={
    name:"vinay",
    age:20,
    print: {
        address:"new city"
    }
}

let obj1= JSON.parse(JSON.stringify(user));
let obj2 = {...user}
obj1.age= 30;
obj1.print.address="york",
obj2.name= "ankit"
console.log(user,obj1, obj2)