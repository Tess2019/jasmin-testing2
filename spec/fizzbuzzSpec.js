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
it("should return Buzz when called as fizzBuzz (5)", function(){
        var result = fizzBuzz(5);
        expect(result).toBe(Buzz);
    });
it("should return fizzBuzz when called as fizzBuzz (15)", function(){
        var result = fizzBuzz(15);
        expect(result).toBe(fizzBuzz);
    });
it("should return 0 or zero when called as fizzBuzz (0)", function(){
        var result = fizzBuzz(0);
        expect(result).toBe(Zero);
    });

}



}