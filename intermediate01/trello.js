// const days = ['mon','tue','wed','thurs','fri','sat']

 // for (let index=0; index<=days.length-1;index++){
    
 //     console.log(days[index ]);
 // }

// console.log(days[0]);

 
//  days.forEach(function(){
//      console.log('starts with ');
//  })

// const month = ['jan','feb','march','may','june','july']

// month.forEach(function(mont,index){
//     console.log(`${index+1}--${mont}`)
// })


const myTodos = []
// myTodos.push('buy bread')
// myTodos.push('record videos')
// myTodos.push('go to gym')
// myTodos.forEach(function(todo,index){
//  console.log(`${index+1}--${todo}`);
// })

myTodos[0]= 'buy bread'
myTodos[1]='record'
myTodos[2]='gym'

for(let i=0; i<=myTodos.length-1;i++){
    console.log(`${i+1}--${ myTodos[i]}`)
}