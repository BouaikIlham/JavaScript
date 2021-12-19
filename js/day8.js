// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 60
//     }
// }
// ////////////////////////////////////////1
// console.log(users["Paul"].email );

// let mostSkillsUser = ""
// let max = 0

// for (const user in users) {
//     let len = users[user].skills.length
//     if (len > max) {
//         max = len
//         mostSkillsUser = users[user].email
//     } 
// }

// console.log(mostSkillsUser)
// /////////////////////////////////////////////////2
// let count = 0
// for  (const user in users) {
//     let point = users[user].points
//     if (point >= 50) {
//         count++
//     }
// }
// console.log(count)
// ///////////////////////////////////////////3
// let mernUsers = []
// for  (const user in users) {
//     if (users[user].skills.includes("React") && users[user].skills.includes("Node") && users[user].skills.includes("Express") && users[user].skills.includes("MongoDB")) {
//         mernUsers.push(users[user].email)
//     }
// }
// console.log(mernUsers)
// ////////////////////////////////////////////////////////////level 2

// const  personAccount = {
//     firstName: "Thomas",
//     lastName: "Hand",
//     incomes: {
//         job: 100,
//         busnes: 80,
//         work: 95
//     },
//     expenses: {
//         holiday: 20,
//         home: 30,
//         car: 60
//      },
//     totalIncome: function() {
//         let sum = 0
//         for (income in this.incomes) {
//             sum = sum + this.incomes[income]
//         }
//         return sum
//     },
//     totalExpenses: function() {
//         let sum = 0
//         for (expense in this.expenses) {
//             sum = sum + this.expenses[expense]
//         }
//         return sum
//     },
// }
        
// console.log(personAccount.totalIncome())
// console.log(personAccount.totalExpenses())
///////////////////////////////////////////////////
// const student = {
//     firstName: "ilham",
//     lastName: "bouaik",
//     age: 19,
//     gardes: {
//         engli: 0,
//         math: 12,
//         philo: 70,
//         french: 10,
//         arabic: 1
//     },
//     fullName: function() {
//         return `I am ${this.firstName} ${this.lastName}`
//     },

//     avergeGrades: function() {
//         let numOfSub = Object.keys(this.gardes).length
//         let sum = 0
//         for (const garde in this.gardes) {
//             sum = sum + this.gardes[garde]
//         }
//         let average = sum / numOfSub
//         return average 
//     },
//     maxGarde: function() {
//         let max = Object.values(this.gardes)[0]
//         let subject = ""
//         for(const grade in this.gardes) {
//             let num = this.gardes[grade]
//             if(num >= max) {
//                 max = num
//                 subject = grade
//             }
//         }
//         return `The max grade is ${max} in ${subject}`
//     },
//     minGarde: function() {
//         let min = Object.values(this.gardes)[0]
//         let subject = ""
//         for (const grade in this.gardes) {
//             let num = this.gardes[grade]
//             if (num <= min ) {
//                 min = num
//                 subject = grade
//             }
//         }
//         return `The min grade is ${min} in ${subject}`
//     }
// }
// console.log(student.fullName())
// console.log(student.avergeGrades())
// console.log(student.maxGarde())
// console.log(student.minGarde())
//////////////////////////////////////
