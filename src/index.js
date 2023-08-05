document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");
    
    ctaButton.addEventListener("click", function (event) {
      event.preventDefault();
      const contactSection = document.querySelector("#contact");
      
      // Scroll to the contact section
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });

const codingBlogs = document.querySelector('#coding-blogs')
const realtyBlogs = document.querySelector('#realty-blogs')
const portfolio = document.querySelector('#portfolio')
// Fetch the blog data from db.json using Fetch API or AJAX
function fetchCodingBlogs() {
  fetch('db.json')
    .then(resp => resp.json())
    .then(data => createBlogCards(data.coding, codingBlogs))
}

function fetchRealtyBlogs(){
  fetch('db.json')
  .then(resp => resp.json())
  .then(data => createBlogCards(data.realty, realtyBlogs))
}

function fetchProjects() {
  fetch('db.json')
  .then(resp => resp.json())
  .then(data => createPortfolioCards(data.portfolio))
}
    
function createBlogCards(data, destination) {
    data.forEach(blog => {
      const listing = document.createElement('div');
      listing.classList.add('embedded-blog');
  
      const link = document.createElement('a');
      link.href = blog.iframe; 
      link.target = '_blank'; 
  
      const image = document.createElement('img');
      image.src = blog.image;
      image.alt = blog.title;
      image.classList.add('blog-image');
      link.appendChild(image);
  
      const content = document.createElement('div');
      content.classList.add('embedded-blog-content');
  
      const title = document.createElement('h3');
      title.classList.add('embedded-blog-title');
      title.textContent = blog.title;
      content.appendChild(title);
  
      const snippet = document.createElement('p');
      snippet.classList.add('embedded-blog-snippet');
      snippet.textContent = blog.snippet;
      content.appendChild(snippet);
  
      link.appendChild(content);
      listing.appendChild(link);
      destination.appendChild(listing);
    });
  }

function createPortfolioCards(data){
  data.forEach(project => {
    const listing = document.createElement('div');
    listing.classList.add('embedded-blog');

    const link = document.createElement('a');
    link.href = project.gitUrl;
    link.target = '_blank';

    const iframe = document.createElement('iframe');
    iframe.src = project.videoUrl;
    iframe.width = '100%';
    iframe.height = '400';
    link.appendChild(iframe)

    const content = document.createElement('div');
    content.classList.add('embedded-blog-content');

    const title = document.createElement('h3');
    title.classList.add('embedded-blog-title');
    title.textContent = project.project;
    content.appendChild(title);

    const snippet = document.createElement('p');
    snippet.classList.add('embedded-blog-snippet');
    snippet.textContent = project.description;
    content.appendChild(snippet);

    link.appendChild(content);
    listing.appendChild(link);
    portfolio.appendChild(listing);
  })
}

  fetchCodingBlogs()
  fetchRealtyBlogs()
  fetchProjects()