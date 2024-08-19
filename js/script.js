'use strict';

const darkBtn = document.querySelector('.sun');
const lightBtn = document.querySelector('.moon');
const themeToggle = document.querySelector('.btn-footer');
const menuBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('.btn-close');
const wideScreen = document.querySelector('.wide-screen');
const titles = document.querySelector('.titles');
const services = document.querySelector('.titles-services');
const aboutUs = document.querySelector('.about-us');
const letters = document.querySelectorAll('.letter');
const stickySection = document.querySelectorAll('.sticky');
const videoAutoplay = document.querySelector('.background-clip');

// ==============VIDEO EFFECTS================\\
let scale = 1;
const ZOOM_SPEED = 0.1;

window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    scale += ZOOM_SPEED;
  } else {
    scale -= ZOOM_SPEED;
  }
  scale = Math.max(1, scale);
  videoAutoplay.style.transform = `scale(${scale})`;
});

// console.log(window.getBoundingClientRect);
// for (let i = 0; i < stickySection.length; i++) {
//   stickySection[i].addEventListener('click', () => {
//     if (stickySection[i].getBoundingClientRect().top <= 1) {
//       console.log(stickySection[i].getBoundingClientRect());
//     }
//   });
// }
// const callBack = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(entry);
//     }
//   });
// };
// const options = {
//   rootMargin: '0px',
//   threshold: 1,
// };
// const observer = new IntersectionObserver(callBack, options);
// stickySection.forEach((section) => {
//   observer.observe(section);
// });
// console.log(observer);

// window.addEventListener('scroll', function () {
//   var character = document.querySelectorAll('.letter');
//   var windowHeight = window.innerHeight;

//   character.forEach((letter) => {
//     var characterPosition = letter.getBoundingClientRect().top;
//     if (characterPosition < windowHeight / 2) {
//       letter.classList.add('non-faded');
//     } else {
//       letter.classList.remove('non-faded');
//     }
//   });
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
window.addEventListener('scroll', reveal);

function reveal() {
  let letters = document.querySelectorAll('.letter');

  for (let i = 0; i < letters.length; i++) {
    let windowHeight = window.innerHeight;
    let revealSection = letters[i].getBoundingClientRect().bottom;
    const revealPoint = 120;

    if (revealSection < windowHeight - revealPoint) {
      letters[i].classList.add('non-faded');
      //   letters[i].style.opacity = `${1}`;
    } else {
      letters[i].classList.remove('non-faded');
      // letters[i].style.opacity = `${0.2}`;
    }
  }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// for (let i = 0; i < stickySection.length; i++) {
//   console.log(stickySection[i]);
//   stickySection[i].addEventListener('scroll', () => {
//     let scrollTop = window.scrollY;
//     let viewportHeigth = window.innerHeight;
//     const contentHeight = stickySection[i].getBoundingClientRect().height;

//     if (scrollTop > contentHeight - viewportHeigth) {
//       stickySection[i].style.position = 'fixed';
//     } else {
//       stickySection[i].style.position = '';
//     }
//   });
// }

// FADE IN TEXT USING THE INTERSECTIONOBSERVER API\\
// const options = {
//   rootMargin: '-90px',
//   threshold: 1,
// };
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     entry.target.classList.toggle('stick', entry.isIntersecting);
//   }, options);
// });

// stickySection.forEach((letter) => {
//   observer.observe(letter);
// });

// const observer = new IntersectionObserver(callBack, options);
// observer.observe(titles);
// observer.observe(aboutUs);
// observer.observe(services);
// letters.forEach((letter) => {
//   observer.observe(letter);
// });
// observer.observe(letters);

//Toggle Menu
menuBtn.addEventListener('click', () => {
  //   console.log('hey');
  wideScreen.classList.add('right-hidden');
});
closeBtn.addEventListener('click', () => {
  wideScreen.classList.remove('right-hidden');
});

//Light and dark mode
themeToggle.addEventListener('click', () => {
  // if(lightBtn.classList.contains('hidden')){
  //     darkBtn.classList.add('left-hidden');
  //     lightBtn.classList.remove('hidden');
  // }else{
  //     darkBtn.classList.
  // }
  lightBtn.classList.contains('hidden')
    ? lightBtn.classList.remove('hidden')
    : lightBtn.classList.add('hidden');

  darkBtn.classList.contains('left-hidden')
    ? darkBtn.classList.remove('left-hidden')
    : darkBtn.classList.add('left-hidden');
});
