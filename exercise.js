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
