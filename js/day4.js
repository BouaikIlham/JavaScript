  let month = "October"
  if ("September, October, November".includes(month)) {
      console.log(`The season is Autumn.`)
  } else if ("April, May, March".includes(month)) {
      console.log(`The season is Spring.`) 
  } else if ("June, July, August".includes(month)) {
      console.log(`The season is Summer`)
  } else if ("December, January, February".includes(month)) {
      console.log(`The season is Winter`)
  } else {
      console.log("the entry is not a month")
  }
//////////////////////////////////////////////////////////////////////////
let month = "march"
month = month.toLowerCase()
if  ("january, march, may, july, august, october, december".includes(month)) {
    console.log(`${month} has 31 days`)
} else if ("april,june,september,nouvember".includes(month)) {
    console.log(`${month} has 30 days`)
} else if("february".includes(month)) {
    console.log(`${month} has 29 days`)
} else {
    console.log("the entry is not a month")
}
///////////////////////////////////////////////////////////////////////////
  let month = "October"
  if ("September, October, November".includes(month)) {
    console.log(`The season is Autumn.`)
} else if ("April, May, March".includes(month)) {
    console.log(`The season is Spring.`) 
} else if ("June, July, August".includes(month)) {
    console.log(`The season is Summer`)
} else if ("December, January, February".includes(month)) {
    console.log(`The season is Winter`)
} else {
    console.log("the entry is not a month")
}
//////////////////////////////////////////////////////////////////////////
let num = 100
if (num < 0 || num > 100 ) {
    console.log("the grade is out of range 0-100")
} else if (num <=49)  {
    console.log(`F`)
} else if (num<=59) {
    console.log(`D`)
} else if (num<=69) {
    console.log(`C`)
} else if ( num<=89)  {
    console.log(`B`)
} else if ( num<=100 ) {
    console.log(`A`)
}
  