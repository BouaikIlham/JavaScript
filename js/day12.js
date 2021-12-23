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