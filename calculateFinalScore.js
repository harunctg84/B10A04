 const person = {
    name : 'Rajib',
    testScore: 40,
    schoolGrade: 10,
    isFFamily: true
 }


function calculateFinalScore(obj) {

    if(typeof obj !== 'object'){
        return "Invalid Input";
    }
   
    let total_marks = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        total_marks = total_marks + 20;
    }

    if(total_marks >= 80){
        return true;
    }
    else{
        return false;
    }

}


console.log(calculateFinalScore({ name: "Rajib", testScore: 25,  schoolGrade: 25, isFFamily : true  }

));