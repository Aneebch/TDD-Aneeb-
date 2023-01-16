const fizzbuzz = require("../src/fizzbuzz")


test("debe de devolver si el numero es multiple de 3", () =>{
  //Given
  const num = 6;
  //When
  let sut = fizzbuzz(num)
  //Then
  expect(sut).toBe("Fizz");
})

test("debe de devolver si el numero es multiple de 5", () =>{
  //Given
  const num = 10;
  //When
  let sut = fizzbuzz(num)
  //Then
  expect(sut).toBe("Buzz");
})


test("debe de devolver si el numero es multiple de 3 y 5", () =>{
  //Given
  const num = 15;
  //When
  let sut = fizzbuzz(num)
  //Then
  expect(sut).toBe("FizzBuzz");
})

test("debe de devolver si el numero es multiple de 3 y 5", () =>{
  //Given
  const num = 2;
  //When
  let sut = fizzbuzz(num)
  //Then
  expect(sut).toBe(2);
})
