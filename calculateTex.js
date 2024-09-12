function calculateTax(income, expenses) {

  if(income<= 0 || expenses<= 0 || income < expenses){
   return 'Invalid Input';
    
}
     const taxpay = ( income - expenses)*20/100;
     return taxpay;

}


const totalTex = calculateTax( 10000, 3000 );
console.log(totalTex);