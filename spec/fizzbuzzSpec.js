describe ("my fizzbuzz game function", function(){

 beforeEach(function(){
        fizzbuzz= new fizzBuzz();
    } );  

describe("returns fizzBuzz, fizz, buzz or numbers", function(){
    it ("should exist",function(){
        expect (fizzBuzz).toBeDefined();
    });
    

    it("should return fizz when called as fizzBuzz (3)", function(){
        var result = fizzBuzz(3);
        expect(result).toBe(fizz);
    });
it("should return Buzz when called as fizzBuzz (5)", function(){
        var result = fizzBuzz(5);
        expect(result).toBe(Buzz);
    });
it("should return fizzBuzz when called as fizzBuzz (15)", function(){
        var result = fizzBuzz(15);
        expect(result).toBe(fizzBuzz);
    });
it("should return 2 when called as fizzBuzz (2)", function(){
        var result = fizzBuzz(2);
        expect(result).toBe(2);
    });

});



});