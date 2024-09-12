
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



let result = waitingTime([6], 4);
console.log (result);