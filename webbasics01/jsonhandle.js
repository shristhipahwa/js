const student ={
    name:'john',
    age:23,
    isActive:true
}
//convert object into string to store into ls

const studentObjToString = JSON.stringify(student)
//console.log(typeof(studentObjToString));
//localStorage.setItem('student',studentObjToString);

const toJson = JSON.parse(studentObjToString);
// back into object

console.log(toJson.age);






