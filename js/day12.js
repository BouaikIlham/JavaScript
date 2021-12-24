const input = document.getElementById('input');
const button = document.getElementById('butt');
const container = document.getElementById("container");

const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

const Generate = (value) => {
    for (let i = 0; i <= value; i++) {
        let number;
        number = document.createElement("h1");
        number.className = "number";
        number.style.fontSize = "30px";
        number.style.margin = "10px";
        number.style.padding = "10px";
        number.style.width = "50px";
        number.style.textAlign = "center";
        number.innerHTML = i;
      
        if (isPrime(i)) {
          number.style.backgroundColor = "red";
        } else if (i % 2 === 0) {
          number.style.backgroundColor = "yellow";
        } else {
          number.style.backgroundColor = "green";
        }
        container.appendChild(number);
      } 
  }

  button.addEventListener('click', () => {
    container.innerHTML = ""
    let value = input.value
    Generate(value)
    input.value = ""
  })
  

