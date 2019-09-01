 
 class User {
    constructor(firstname,lastname,credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }
    getFullName(){
        let fullname = `${this.firstname} ${this.lastname} is my full name`;
        return fullname;
    }
    editName(newname){
        const myname = newname.split(' ')
        this.firstname = myname[0]
        this.lastname = myname[1]
    }
 }
//inheritence
 class Teacher extends User{
     constructor(firstname,lastname,credit,subject){
         super(firstname,lastname,credit);
         this.subject = subject;
     }
 }

 const john = new Teacher('john','anderson',34,'python');
 
john.editName('johnny anderson')
console.log(john);
 //const sammy = new User();
 