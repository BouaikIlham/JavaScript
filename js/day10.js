const year = document.getElementById('year')
const time = document.getElementById('time')
const lists = document.querySelectorAll('li')
lists.forEach((list) => {
list.innerHTML.includes("Done")
    if(list.innerHTML.includes("Done")) {
        list.style.backgroundColor = 'green'
    } else if (list.innerHTML.includes("Ongoing")){
        list.style.backgroundColor = 'yellow'
    } else if (list.innerHTML.includes("Coming")) {
        list.style.backgroundColor = 'red'
    }

})

year.style.fontSize = "50px"


setInterval(() => {
    let t = new Date 
    time.innerHTML = t
    time.style.background = getRandomColor()

    year.style.background = getRandomColor()

    
}, 1000)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }