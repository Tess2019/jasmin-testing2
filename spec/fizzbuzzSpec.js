describe ("my fizzbuzz game function", function(){
it (should return numbers divisible by 3 and 5 );
   
beforeEach(function(){
        fizzbuzz= new fizzBuzz();
    } );

describe("returns fizzBuzz, fizz, buzz or numbers", function(){
    it ("should exist",function(){
        expect (fizzBuzz).toBeDefined();
    } );

    it("should return fizz when called as fizzBuzz (3)", function(){
        var result = fizzBuzz(3);
        expect(result).toBe(fizz);
    });

}



}