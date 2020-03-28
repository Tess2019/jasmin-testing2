fizzBuzz = function(numbers){
    if(number % 3===0){
        return  "fizz";
    }

    if (number % 5===0){
        return "Buzz"
    }
    if ( number % 3===0 && number % 5===0){
        return "fizzBuzz"
    }
}