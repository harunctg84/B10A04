function calculateTax(income, expenses) {
    if(income <= 0 || expenses <= 0 || income < expenses ){
     return'Invalid Input';
      
  }
      const monthlyIncome = income;
      const monthlyExpense = expenses;
      const taxpay = (monthlyIncome - monthlyExpense)*20/100;
      return taxpay;
  
  }
 
  
  function sendNotification(email) {
    if (!email.includes('@')) {
      return "Invalid Email";
    }
    let divide = email.split('@');
    let userName = divide[0];
    let domainName = divide[1];
    return userName + ' sent you an email from ' + domainName;
      
  
  }


  function checkDigitsInName(name) {
    if( typeof name !== 'string') {
      return"Invalid Input"
    }
    for(const char of name){
      if(!isNaN(parseInt(char)) && char !== ' '){
          return true;
      }
    }
    return false;
      
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


function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes)|| typeof serialNumber !== 'number'){
      return "Invalid Input "
    }
    let totaltimes = 0;
    for(time of waitingTimes){
      totaltimes += time
    }
    let averageTime = Math.round(totaltimes / waitingTimes.length)
  
    let toralCandidatesBefore = serialNumber -1;
  
    let remainingCandidates = toralCandidatesBefore - waitingTimes.length;
  
    let totalWaitingTime = averageTime * remainingCandidates;
    return totalWaitingTime;
  
  
  
  }
  