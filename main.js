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