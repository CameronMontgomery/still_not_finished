const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active')
})

// Slider Code


const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const slider = document.querySelector('.slider');
let firstSlide;
let lastSlide;

let featuredArticles = [
  {
    title: '7 Tips for Adjusting to Life After Incarceration',
    author: 'Lifestyle',
    description: 'life after incarceration is full of challenges. But it does\'t mean you are without options. Here are 7 essential tips to help adjust to life on the outside.',
    image: './assets/images/articles/slide1.jpg'
  },
  {
    title: '6 Pillars of Veteran Recovery',
    author: 'Brian Johnson',
    description: 'One night I spend several hours discussing military life one night with a Vietnam Veteran. That night he said something that I will never forget “it is easier to make a warrior out of a civilian than it is to make a civilian out of a warrior.”',
    image: './assets/images/articles/slide2.jpg'
  },
  {
    title: 'Article 3',
    author: 'Simon Simpleton',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ut sit culpa',
    image: './assets/images/articles/slide3.jpg'
  }
]

featuredArticles.forEach(({title, author, description, image}, i) => {
  const slide = document.createElement('div');
  slide.classList.add('slider__slide');
  slide.style.backgroundImage = "url('" + image + "')";
  if (i == 0) {
    firstSlide = slide;

    slide.classList.add('active');
  } else if (i + 1 == featuredArticles.length) {
    lastSlide = slide;
  }

  const slideContent = document.createElement('div');
  slideContent.classList.add('slider__content');

  const contentTitle = document.createElement('h3');
  contentTitle.classList.add('slider__title');
  contentTitle.textContent = title;

  const contentAuthor = document.createElement('span');
  contentAuthor.textContent = author;

  const contentDescription = document.createElement('div');
  contentDescription.classList.add('slider__description');
  contentDescription.textContent = description;

  contentTitle.appendChild(contentAuthor);
  slideContent.appendChild(contentTitle);
  slideContent.appendChild(contentDescription);
  slide.appendChild(slideContent);

  slider.appendChild(slide);
});

nextBtn.addEventListener('click', () => {
  const activeSlide = document.querySelector('.slider__slide.active');
  let nextSibling = activeSlide.nextElementSibling;

  if (nextSibling == null) {
    nextSibling = firstSlide;
  }
  
  if (nextSibling.classList.contains('slider__slide')) {
    activeSlide.classList.remove('active');
    nextSibling.classList.add('active');
  }
})

prevBtn.addEventListener('click', () => {
  const activeSlide = document.querySelector('.slider__slide.active');
  let nextSibling = activeSlide.previousElementSibling;
  
  if (nextSibling == null || !nextSibling.classList.contains('slider__slide')) {
    nextSibling = lastSlide;
  }

  if (nextSibling.classList.contains('slider__slide')) {
    activeSlide.classList.remove('active');
    nextSibling.classList.add('active');
  }
})

// Tab panels




















//  THIS CODE IS FOR THE TEXT-TO-SPEECH API NOT CURRENTLY USED REMOVE BEFORE LAUNCH

//let api = {
//   base : 'http://api.voicerss.org/?key=',
//   key: '8ed75c8eee934e41a245f2105bb8c0d8',
//   default: '&hl=en-us&src=',
//   voiceMale: '&v=Jack&src=',
// }

// let btn = document.getElementById('read');
// let text = document.querySelector('.test').innerText;

// btn.addEventListener('click', event => {
//   event.preventDefault()
//   read()
// })





// function read() {
//   axios.get('http://api.voicerss.org/?key=8ed75c8eee934e41a245f2105bb8c0d8&hl=en-us&c=MP3&f=16khz_16bit_stereo&src=Hello, world!')
//     .then(function(response) {
//       console.log(response);
//       console.log(response.config)
//       document.getElementById('audio').src = response.config
//       // document.querySelector('.audio').src=''
//       // response.data
//     })
//     .catch(function(err) {
//       console.log(err);
//       alert(`I seem to have lost my voice. Please try later.`)
//     })
//     .then(function(data) {
//     })
//   }

  // ${api.base}${api.key}${api.default} this is a test
