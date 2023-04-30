// show menu

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


// validate if constants exist 

if (navToggle){
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add('show-menu');
    })
}


if(navClose) {
    navClose.addEventListener('click' , ()=> {
        navMenu.classList.remove('show-menu');
    })
}


// remove menu when clicked

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
        const navMenu = document.getElementById('nav-menu');
        // when we click the link , we remove show -menu
        navMenu.classList.remove('show-menu')
        console.log('link clicked');
}


navLink.forEach(n => n.addEventListener('click' , linkAction))


// change background header

function scrollHeader() {
    const nav = document.getElementById('header');

    // when scroll is greater than 100 vh , add scroll header
    if (this.scrollY >= 100) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll' , scrollHeader);

// Swiper Discover

var swiper = new Swiper(".discover-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 0,
    },
  });



  // video

  const videoFile = document.getElementById('video-file');
        videoButton = document.getElementById('video-button');
        videoIcon = document.getElementById('video-icon');

  function playPause (){
    if (videoFile.paused){

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

  videoButton.addEventListener('click' , playPause);


  function finalVideo(){
    // video ends , icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
  }

  // ended when the video ends

  videoFile.addEventListener('ended',finalVideo);