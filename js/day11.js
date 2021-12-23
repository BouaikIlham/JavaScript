const container = document.getElementById("container");
const titles = document.getElementById("titles");

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const titlesConf = [
    {
        text: "even numbers background is green",
        color: "green"
    },
    {
        text: "odd numbers background is yellow",
        color: "yellow"
    },
    {
        text: "prime numbers background is red",
        color: "red"
    }
]

titlesConf.forEach((title) => {
    let title1 = document.createElement("h1");
    title1.innerHTML = title.text
    title1.style.color = title.color;
    title1.style.fontSize = "40px";
    titles.appendChild(title1);
})



for (let i = 0; i <= 100; i++) {
  let number;
  number = document.createElement("h1");
  number.className = "number";
  number.style.fontSize = "30px";
  number.style.margin = "10px";
  number.style.padding = "10px";
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
