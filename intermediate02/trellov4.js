const myTodos = ['Buy Bread','go to gym','record']
//console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [{
    title:'Buy Bread',
    isDone:false,
} , {
    title:'go to gym',
    isDone:false,
} , {
    title:'record',
    isDone:true,
}]

//  const index = newTodos.findIndex(function(todo,index){
    
//      return todo.title === 'go to gym'
//  })
//  console.log(index);
// const findTodo = function(myTodos,title){
//   const index = myTodos.findIndex(function(todo,index){
//       return todo.title.toLowerCase() === title.toLowerCase()
//   })
//   return myTodos[index]
// }
// let printMe = findTodo(newTodos,'go to gym')
// console.log(printMe)


const findTodo = function(myTodos,title){
    const titleReturned = myTodos.find(function(todo,index){
        return todo.title === title
    })
    return titleReturned
}
let printMe = findTodo(newTodos,'go to gym')
 console.log(printMe)
