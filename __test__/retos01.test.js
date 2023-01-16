const {maxNumber, sumaPares} = require('../src/retos01.js')

test("debe de devolver el mayor numero de un array de numeros", () =>{
  //Given
  const numList = [1, 0, -1, 5, 8, 10, 15]
  //When
  let sut = maxNumber(numList)
  //Then
  expect(sut).toBe(15)
})