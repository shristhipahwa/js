function myValidation(){
    let myValue = document.getElementById('myform').value;
    if(isNaN(myValue) || myValue<1 || myValue>20){
       const para = document.querySelector('#idone')
       para.textContent = 'not a valid input'

    } else{
        console.log('this input is okay');
    }
}


document.querySelector('.myforms').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value)
    let passes = event.target.pass.value;
    console.log(passes)
    let check = event.target.passcheck.value;
    console.log(check)
    event.target.username.value= '';
    event.target.pass.value= '';
    event.target.passcheck.value= '';

    if(passes!==check){
        console.log('password does not match')

    }
else{
    console.log('password matched')
}
})

