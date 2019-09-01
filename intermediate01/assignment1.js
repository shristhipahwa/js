
let hello = function(currMarks,totalMarks){
     let percentage = (currMarks/totalMarks)*100
     if(percentage>=90){
         console.log('A '+percentage)
     }
     else if (percentage>=80){
        console.log('B '+percentage)
    }
}
hello(500,500)
