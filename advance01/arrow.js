// const sayHello = function(name){
//     return'hey there ' + name + ' man'
// }
// console.log(sayHello('sam'));

const sayHello = (name) => `hey ${name}`
     //console.log(sayHello('sam'));

     const todos= [{
        title:'Buy Bread',
        isDone:true,
    } , {
        title:'go to gym',
        isDone:true,
    } , {
        title:'record',
        isDone:false,
    }]    
    
    
        const thingsDone = todos.filter((todo)=>todo.isDone === true)
       //console.log(thingsDone)
     //   thingsDone.forEach((todo )=> console.log(todo.title))
     
const cameras = {
    price:600,
    weight:2000,
    myDes:function(){
        return `this canon camera is of ${this.price}$`
    }
}
  console.log(cameras.myDes())

