// nav bar and hamburger code
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active')
})

// sign up code

let signUp = document.querySelector('#signup-btn');
let newEmail = document.querySelector('#emailToAdd');
let newPassword = document.querySelector('#passwordToAdd');

signUp.addEventListener('click', addEvent)

function addEvent(event) {
  event.preventDefault();
  addData(newEmail.value, newPassword.value);
  alert('User Added');
}

// function addEvent(event) {
//   event.preventDefault()
//   if (newEmail.value === true && newPassword === true) {
//     addData(newEmail.value, newPassword.value);
//     alert('User Added')
//   } else {
//     alert('User not created. Please enter information and try again.')
//   }
// }

function addData(email, password) {
  console.log(email, password)
  let user = {
    userEmail: email,
    userPassword: password
  }

  let userStringified = JSON.stringify(user);
  localStorage.setItem('userStore', userStringified);
}
