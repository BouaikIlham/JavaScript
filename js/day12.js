const button = document.getElementById('button')
const input = document.getElementById("input")
const message = document.getElementById("message")


button.addEventListener('click', (e) => {
    let value = input.value
   
    if(value %2 === 0) {
        message.innerHTML = "even"
    } else {
        message.innerHTML = "odd"
    }

    
})
//////////////////////////////////////////////////////////////////////
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button = document.querySelector('button')
const message = document.getElementById("message")

let bmi
button.addEventListener('click', () => {
  bmi = mass.value / height.value ** 2
message.innerHTML = (`your bmi is ${bmi.toFixed(2)}`)

})