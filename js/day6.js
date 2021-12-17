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

