// submit events
const form = document.querySelector('.signup-form')

const username = document.querySelector('#username')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(username.value)
})

// test RegEx

const usernm = 'exercis'
pattern = /[a-z]{7,}/

let outcome = pattern.test(usernm)
console.log(outcome)

//form validation

const feedback = document.querySelector('.feedback')
const usernm = '@exercise'
pattern = /^[a-z]{6,12}$/

let outcome = pattern.test(usernm)
console.log(outcome)
if (outcome) {
  feedback.textContent = 'That username is valid '
} else {
  feedback.textContent = 'Must be letters only between 6 to 12 characters'
}

//live feedback
form.username.addEventListener('keyup', (e) => {
  if (pattern.test(e.target.value)) {
    form.username.setAttribute('class', 'passed')
  } else {
    form.username.setAttribute('class', 'failed')
  }
})
