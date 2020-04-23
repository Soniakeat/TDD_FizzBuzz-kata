
function fizzBuzz(n) { 
  for (var i = 1; i <= 100; i++ ) {
    const divisibleBy = (divider, n) => n % divider == 0;
  
    if(divisibleBy(15, n)) 
      return "fizzbuzz";
  
    if(divisibleBy(3, n)) 
      return "fizz";
  
    if(divisibleBy(5, n)) 
      return "buzz";
  
    return n; 
  
  }
} 
  

  
module.exports = fizzBuzz;
