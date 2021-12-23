const container = document.getElementById('container')

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

    for (let i = 0; i <= 100; i++) {
    let number
    number = document.createElement('h1')
    number.className = 'numbers'
    number.style.fontSize = '30px'
    number.style.margin = "10px"
    number.style.padding = "10px"
    number.innerHTML = i

    if(isPrime(i)) {
        number.style.backgroundColor = 'red'
    } else if(i % 2) {
        number.style.backgroundColor = 'yellow'
    } else {
        number.style.backgroundColor = 'green'
    }

    container.appendChild(number)
}
