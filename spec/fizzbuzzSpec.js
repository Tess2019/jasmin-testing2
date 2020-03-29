describe ("my fizzbuzz game function", function(){

 beforeEach(function(){
        fizzbuzz= new fizzBuzz();
    } );  

describe("returns fizzBuzz, fizz, buzz or numbers", function(){
    it ("should exist",function(){
        expect (fizzBuzz).toBeDefined();
    });
    

    it("should return fizz when called as fizzBuzz (3,6,9)", function(){
        var result = fizzBuzz(3,6,9);
        expect(result).toBe(fizz);
    });
it("should return Buzz when called as fizzBuzz (5,10)", function(){
        var result = fizzBuzz(5,10);
        expect(result).toBe(Buzz);
    });
it("should return fizzBuzz when called as fizzBuzz (15,30)", function(){
        var result = fizzBuzz(15,30);
        expect(result).toBe(fizzBuzz);
    });
it("should return 0 or Zero when called as fizzBuzz (0)", function(){
        var result = fizzBuzz(0);
        expect(result).toBe(Zero);
    });

});



});