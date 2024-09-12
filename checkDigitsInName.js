

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

const result = checkDigitsInName(["Raj"]);
console.log( result);