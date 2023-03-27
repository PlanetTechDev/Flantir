'use strict'

const button = document.querySelector('.try-demo');
const popup = document.querySelector('.popup');

button.addEventListener('mouseenter', () => {
  popup.classList.add('show');
});

button.addEventListener('mouseleave', () => {
  popup.classList.remove('show');
});


function animateOnScroll() {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        element.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', animateOnScroll);