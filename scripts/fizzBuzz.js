fizzBuzz = function(number){

    if(number % 3===0){
        return  "fizz";
    }

    else if (number % 5===0){
        return "Buzz";
    }
  else if ( number % 3===0 && number % 5===0){
        return "fizzBuzz";
    }

    else {
        return number
    }
};
