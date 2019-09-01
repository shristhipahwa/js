let myTodos = {
    day:'monday',
    meetings:0,
    meetDone:0, 

    addMeeting: function(num){
        this.meetings = this.meetings +num
    },
    calcMeetDone:function(num){
        this.meetDone = this.meetDone + num

    },
    reset: function(){
        this.meetings = 0
        this.meetDone = 0

    },
    summary: function(){
        this.meetings = this.meetings - this.meetDone
        return `you have ${this.meetings} meetings today!`
    }
}

myTodos.addMeeting(4);
myTodos.calcMeetDone(2);
console.log(myTodos.summary());
