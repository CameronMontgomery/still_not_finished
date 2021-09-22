
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

function verifyEvent(event) {
  event.preventDefault();
  verifyUser();
}

function verifyUser() {
  let retrievedUser = localStorage.getItem('userStore');
  let parsedUser = JSON.parse(retrievedUser);
  
  if (parsedUser.userEmail == email && parsedUser.userPassword == password) {
    console.log('success')
  } else {
    console.log('fail')
  }

}
