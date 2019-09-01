//const myElement = document.querySelector('#idone')

//console.log(myElement)
// const myPElements = document.querySelector('p')
// myPElements.textContent = 'i am changed using js'

const myPElements = document.querySelectorAll('p')
 myPElements.forEach(function(p){
     p.textContent = ' i am changed'
 })

 const myNewPara = document.createElement('p')
 myNewPara.textContent = ' i am added'
 document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',(event)=>{
   event.target.textContent = 'i was clicked'
})

//track input form

document.querySelector('#myform').addEventListener('input',(event)=>{
    console.log(event.target.value);
    
})