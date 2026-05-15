//Switch statement
const grade = 'P'

switch (grade) {
  case 'A':
    console.log('you got a grade A')
    break
  case 'B':
    console.log('you got a grade B')
    break
  case 'C':
    console.log('you got a grade C')
    break
  case 'D':
    console.log('you got a grade D')
    break
  case 'E':
    console.log('you got a grade E')
    break

  default:
    console.log('not a valid grade')
}

//Function declaration //
greet()
function greet() {
  console.log('I am Md Hossen')
}

//Function Expression

const calcArea = function (radius) {
  let area = 3.14 * radius ** 2
  return area
}
const a = calcArea(5)
console.log(a)

//Difference between function and method
//Function
const welcome = () => {
  return 'Hello friend'
}
let output = welcome()
console.log(output)

// Method
const position = 'engineer'
let result = position.toUpperCase()
console.log(result)

//forEach method
let names = ['james', 'erik', 'aston', 'fedric']

names.forEach((name, index) => {
  console.log(index, name)
})

//create object literal and add method in it
employee = {
  name: 'Andrew',
  position: 'Supervisor',
  salary: 20000,
  city: 'London',
  login: function () {
    console.log('you are logged in')
  },
  logout: function () {
    console.log('you just logged out')
  },
}
console.log(employee.name)
console.log(employee['position'])

salary = 30000
console.log(salary)
console.log(typeof employee)

employee.login()
employee.logout()

//using 'this' key word to access in an object from another function
employee = {
  name: 'Andrew',
  position: 'Supervisor',
  salary: 20000,
  city: 'London',
  sites: ['code and tech', 'knowledgePlatform'],
  login: function () {
    console.log('you are logged in')
  },
  logout: function () {
    console.log('you just logged out')
  },
  logSites() {
    // console.log(this.sites)
    this.sites.forEach((site) => {
      console.log(site)
    })
  },
}

employee.logSites()




