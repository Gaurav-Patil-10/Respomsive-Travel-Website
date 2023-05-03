// show menu

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');


// validate if constants exist 

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}


if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}


// remove menu when clicked

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // when we click the link , we remove show -menu
  navMenu.classList.remove('show-menu')
  console.log('link clicked');
}


navLink.forEach(n => n.addEventListener('click', linkAction))


// change background header

function scrollHeader() {
  const nav = document.getElementById('header');

  // when scroll is greater than 100 vh , add scroll header
  if (this.scrollY >= 100) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// Swiper Discover

var swiper = new Swiper(".discover-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});



// video

const videoFile = document.getElementById('video-file');
videoButton = document.getElementById('video-button');
videoIcon = document.getElementById('video-icon');

function playPause() {
  if (videoFile.paused) {

    //play video
    videoFile.play()

    // we change the icon
    videoIcon.classList.add('ri-pause-line')
    videoIcon.classList.remove('ri-play-line');
  } else {

    // pause video
    videoFile.pause()

    // we change the icon
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line');
  }
}

videoButton.addEventListener('click', playPause);


function finalVideo() {
  // video ends , icon change
  videoIcon.classList.remove('ri-pause-line')
  videoIcon.classList.add('ri-play-line')
}

// ended when the video ends

videoFile.addEventListener('ended', finalVideo);


// show scroll

function scrollTop() {
  const scrollTop = document.getElementById('scroll-up');

  // when the scroll is higher than 200 vh , add the show-scroll
  if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop);


// scroll sections active links
const navLinks = document.querySelectorAll('.nav-link');

// add event listener to window
window.addEventListener('scroll', () => {

  // get current scroll position
  const scrollPosition = window.scrollY;

  // looping through all nav links

  navLinks.forEach(link => {

    // get the section associated with the link
    const section = document.querySelector(link.hash);

    // check if the section is in view 
    if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
      // add active-link to class
      link.classList.add('active-link');
    } else {
      // remove the active link class
      link.classList.remove('active-link')
    }
  })
})


// dark mode

const html = document.querySelector('html');
const toggle = document.querySelector('#theme-button');



toggle.addEventListener('click', () => {
  html.classList.toggle('dark-mode');
  if (toggle.classList.contains('ri-moon-line')) {
    toggle.classList.remove('ri-moon-line');
    toggle.classList.add(
      'ri-sun-line'
    );
  } else {
    toggle.classList.add('ri-moon-line');
    toggle.classList.remove(
      'ri-sun-line'
    );
  }

  localStorage.setItem('dark-mode', html.classList.contains('dark-mode'));
  localStorage.setItem('dark-icon', toggle.classList.contains('ri-sun-line'));
});







