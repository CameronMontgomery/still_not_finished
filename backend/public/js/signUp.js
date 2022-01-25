// nav bar and hamburger code
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active')
})

function showPassword() {
  let passwordInput = document.getElementById("passwordInput");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}











// -------------------- version 1 code
// sign up code

// let signUp = document.querySelector('#signup-btn');
// let newEmail = document.querySelector('#emailToAdd');
// let newPassword = document.querySelector('#passwordToAdd');

// signUp.addEventListener('click', addEvent)

// function addEvent(event) {
//   event.preventDefault()
//   if (newEmail.value.length > 1 && newPassword.value.length > 1 ) {
//     addData(newEmail.value, newPassword.value);
//     alert('User Added')
//     window.location.href = "./signIn.html";
//   } else {
//     alert('User not created. Please enter information and try again.')
//   }
// }

// function addData(email, password) {
//   let user = {
//     userEmail: email,
//     userPassword: password
//   }

//   let userStringified = JSON.stringify(user);
//   localStorage.setItem('userStore', userStringified);
// }
