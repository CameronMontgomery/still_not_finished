
// nav bar and hamburger code
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active')
})

// sign in code

let signIn = document.querySelector('#signin-btn');
let email = document.querySelector('#email')
let password = document.querySelector('#password')

signIn.addEventListener('click', verifyEvent)

function verifyEvent(event) {
  event.preventDefault();
  console.log('test')
  verifyUser();
}

function verifyUser() {
  let retrievedUser = localStorage.getItem('userStore');
  let parsedUser = JSON.parse(retrievedUser);
  console.log(parsedUser.userEmail)
  console.log(email)
  if (parsedUser.userEmail == email.value && parsedUser.userPassword == password.value) {
    console.log('success')
    window.location.href = "./";
  } else {
    console.log('fail')
  }

}
