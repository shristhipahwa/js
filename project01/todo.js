// var h = document.createElement('h1')
// var myValue = document.createTextNode('hello world!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);

var ul = document.getElementById('list');
var li ;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);
 
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var removeallButton = document.getElementById('removeall');
removeallButton.addEventListener('click',removeAllItem);




function addItem(){
   var input = document.getElementById('input');
   var item = input.value;
   ul = document.getElementById('list');
   var textnode = document.createTextNode(item);
   if(item === ''){
       
       input.value='Enter the Todo';
        setTimeout(() => {
         input.value = '';
        }, 1000);
  
        return false;
   }
else{
    li = document.createElement('li');
    //create checkbox
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id','check')
    //create label
    var label = document.createElement('label');
    label.setAttribute('for','item') //optional

    //add on webpage
    ul.appendChild(label);
    li.appendChild(checkbox);
    li.appendChild(label);
    label.appendChild(textnode);

    ul.insertBefore(li,ul.childNodes[0]);
    
    setTimeout(() => {
        li.className = 'visual'
    }, 1);

    input.value = '';
}
}

function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}

function removeAllItem(){
    //  li=ul.children
    
    //   for (let index = 0; index < li.length; index++) {
    //       ul.removeChild(li[index])
        
    //   }
     ul.remove();
}