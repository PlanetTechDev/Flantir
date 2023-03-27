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

  const question = document.querySelectorAll('.qna-questions');

  question.forEach(q => {
    q.addEventListener('click', () => {
      q.nextElementSibling.classList.toggle('show');
      q.querySelector('button i').classList.toggle('uil-minus-circle');
      q.querySelector('button i').classList.toggle('uil-plus-circle');
    });
  });
  