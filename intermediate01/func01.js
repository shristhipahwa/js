let sayHello = function(name){
    console.log(`greeting message for ${name}`);
    console.log(`hey ${name}`);
    
}
//sayHello('john')

let fullNameMaker = function(firstname , lastname){
    console.log('welcome to ' +firstname+ ' pahwa s house');
    console.log(`happy to have you,${firstname} ${lastname}`);
    
 }
 fullNameMaker('Shristhi','Pahwa')

//   
//let adder = function(a,b){
//      let sum = a+b
//       return sum
//   }

// console.log(adder(2,3))

let multiply = function(a,b){
    let multi= a*b
    return multi
}
console.log(multiply(2,3))


let guestUser = function(name='unName',courseCount=0){
    return `hello ${name} and your course count is `+courseCount

}
console.log(guestUser());