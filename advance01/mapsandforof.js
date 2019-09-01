var john = {
    name:'i am john',
    age:24,
    isActive:true
}

var marry={
    name:'i am marry',
    age:23,
    isActive:true
}

var sam={
    name:'i am sam',
    age:29,
    isActive:false
}

let users = new Map()
users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)
//console.log(users.size);

console.log(users.get('sam'));
console.log(users.keys());
console.log(users.values());

for (const key of users.keys()) {
    console.log(key)
    
}
for (const [key,value] of users.entries()) {

    console.log(key + value.name)
}

users.forEach((value,key)=>{
    console.log(key + value.name)
})

var arrofArr =[['one','1'],['two','2']]
var newMap = new Map(arrofArr)
 for (const [key,value] of newMap.entries()) {
     console.log(key+value)
     
 }