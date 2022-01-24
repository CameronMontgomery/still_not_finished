// nav bar and hamburger code
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active')
})

// Axios call to get article data

axios.get('./Articles.json')
.then(function(response) {
  let articles = response.data.articles;
  console.log(articles)
  
  document.querySelector('#pillars-img').src = articles[2].image;
  document.querySelector('#pillars-title').innerText = articles[2].title;
  document.querySelector('#pillars-author').innerText = articles[2].author;
  document.querySelector('#pillars-post').innerText = articles[2].post;

  document.querySelector('#vtc-img').src = articles[0].image;
  document.querySelector('#vtc-title').innerText = articles[0].title;
  document.querySelector('#vtc-author').innerText = articles[0].author;
  document.querySelector('#vtc-post').innerText = articles[0].post;

  document.querySelector('#phototherapy-img').src = articles[1].image;
  document.querySelector('#phototherapy-title').innerText = articles[1].title;
  document.querySelector('#phototherapy-author').innerText = articles[1].author;
  document.querySelector('#phototherapy-post').innerText = articles[1].post;

})
.catch(function(err) {
    console.log(err);
})
.then(function(data) {

})