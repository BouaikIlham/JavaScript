
function fullName() {
  let name = 'ilham'
  console.log(name)
} 
fullName()
////////////////////////
function fullName( firstName, lastName )  {
  return `${firstName} ${lastName}`
}
console.log(fullName('ilham', 'bouaik'))
/////////////////////////////
function addNumbers (number1, number2) {
  let sum = number1 + number2
  return sum
} console.log(addNumbers(2,3))
/////////////////////////
function areaOfRectangle( length, width) {
  return length * width
} console.log(areaOfRectangle(2, 3))
//////////////////////////
const perimeterOfRectangle = (length, width) => {
  return  2*(length + width)
} 
console.log(perimeterOfRectangle(2,2))
/////////////////////////////
    const convertCelciusToFahrenheit = Celcius => {
      return  (Celcius * 9/5) + 32
    }
    console.log(convertCelciusToFahrenheit(2))
/////////////////////////////////
const solveLinEquation = (a, b) =>  {
  if ( a === 0 ) {
    return 'a must not be 0'
  }
  return -b/a
}
console.log(solveLinEquation(2, 5))


const  reverseArray = (arr) => {
  // return arr.reverse() 

  let newArr = []
  while(arr.length > 0) {
    newArr.push(arr.pop())
  }

  return newArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))















 