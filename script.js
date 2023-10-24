// global ref variables for hamburger menu
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

// Function to toggle the menu and overlay
function toggleMenu() {
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
}

// Event listener for hamburger menu and "Menu X"
menuBtn.addEventListener('click', toggleMenu);

// Event listener for overlay
overlay.addEventListener('click', () => {
  menuBtn.classList.remove('active');
  navMenu.classList.remove('active');
  overlay.style.display = 'none';
});

// Slider scroll effect
function moveSlider() {
  const slider = document.querySelector('.slider');
  const sliderRect = slider.getBoundingClientRect();

  // If slider is in view
  if (sliderRect.top < window.innerHeight && sliderRect.bottom > 0) {
    const scrollPercent = (sliderRect.bottom / window.innerHeight) * 100;
    const offset = 50;
    const translateX = scrollPercent - (110 - offset);

    slider.style.transform = `translateX(${translateX}%)`;
  }
}

window.addEventListener('scroll', moveSlider);

// Scroll button
let scrollBtn = document.querySelector('.scroll-btn');

// When user scrolls down 40px from top, show button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
}

// When user clicks button, scroll to top
function topFunction() {
  // set scroll per frame
  const scrollStep = -window.scrollY / (400 / 15);

  // scroll animation
  function scrollAnimation() {
    if (window.scrollY > 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scrollAnimation);
    }
  }

  // call scroll animation
  requestAnimationFrame(scrollAnimation);
}

// Event listener for scroll button
scrollBtn.addEventListener('click', topFunction);