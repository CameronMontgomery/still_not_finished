let title = document.querySelector('#input-title');
let author = document.querySelector('#input-author');
let post = document.querySelector('#input-message');
const submitPostBtn= document.querySelector('#submit-post-btn');

submitPostBtn.addEventListener('click', addEvent);

function addEvent(event) {
  event.preventDefault()
  if (title.value.length > 1 && author.value.length > 1 && post.value.length > 1) {
    submitPost(title.value, author.value, post.value);;
    alert('Post Submitted for Review')
    window.location.href = "./member.html";
  } else {
    alert('Post Not Submitted. All fields are required.')
  }
}

function submitPost(title, author, post) {
  console.log(title, author, post)
  let newPost = {
    Title: title,
    author: author,
    post: post
  }

  let postStringified = JSON.stringify(newPost);
  localStorage.setItem('submittedPost', postStringified);
}
