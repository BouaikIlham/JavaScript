const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 60
    }
}
////////////////////////////////////////1
console.log(users["Paul"].email );

let mostSkillsUser = ""
let max = 0

for (const user in users) {
    let len = users[user].skills.length
    if (len > max) {
        max = len
        mostSkillsUser = users[user].email
    } 
}

console.log(mostSkillsUser)
/////////////////////////////////////////////////2
let count = 0
for  (const user in users) {
    let point = users[user].points
    if (point >= 50) {
        count++
    }
}
console.log(count)
///////////////////////////////////////////3
let mernUsers = []
for  (const user in users) {
    if (users[user].skills.includes("React") && users[user].skills.includes("Node") && users[user].skills.includes("Express") && users[user].skills.includes("MongoDB")) {
        mernUsers.push(users[user].email)
    }
}
console.log(mernUsers)

