// Script for featured article 

const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const slider = document.querySelector('.slider');
let firstSlide;
let lastSlide;

let projects = [
  {
    title: 'Article 1',
    author: 'John Doe',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ut sit culpa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ut sit culpa',
    image: './assets/images/articles/slide1.jpg'
  },
  {
    title: 'Article 2',
    author: 'Jane Doe',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ut sit culpa',
    image: './assets/images/articles/slide2.jpg'
  },
  {
    title: 'Article 3',
    author: 'Simon Simpleton',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ut sit culpa',
    image: './assets/images/articles/slide3.jpg'
  }
]

projects.forEach(({title, author, description, image}, i) => {
  const slide = document.createElement('div');
  slide.classList.add('slider__slide');
  slide.style.backgroundImage = "url('" + image + "')";
  if (i == 0) {
    firstSlide = slide;

    slide.classList.add('active');
  } else if (i + 1 == projects.length) {
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