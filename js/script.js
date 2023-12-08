

 /* let sectionContents = document.querySelectorAll('.section-content');

  sectionContents.forEach(content => {
    if (content.getBoundingClientRect().top < window.innerHeight / 1.5) {
        content.classList.add('visible');
    } else {
        content.classList.remove('visible');
    }
}); */
  

let zwischentitel = document.querySelectorAll('.zwischentitel');

let transcontent = document.querySelectorAll('.transition-content');

let bandersnatch = document.querySelectorAll('.bandersnatch');


window.addEventListener('load', function() {

    if (!sessionStorage.getItem('introShown')) {

        document.getElementById('intro-animation').style.display = 'flex';

        setTimeout(function() {
            document.getElementById('intro-animation').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 5500);

    
 
        sessionStorage.setItem('introShown', 'true');


        let zwischentitel = document.querySelectorAll('.zwischentitel');
        setTimeout(function() {
            zwischentitel.forEach(function(element) {
                element.classList.add('visible');
            });
        }, 5700); 
    
        let transcontent = document.querySelectorAll('.transition-content');
        setTimeout(function() {
            transcontent.forEach(function(element) {
                element.classList.add('visible');
            });
        }, 6000); 
    
        let bandersnatch = document.querySelectorAll('.bandersnatch');
        setTimeout(function() {
            bandersnatch.forEach(function(element) {
                element.classList.add('visible');
            });
        }, 6500); 

        
    } else {

        document.getElementById('intro-animation').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';

        let zwischentitel = document.querySelectorAll('.zwischentitel');
        setTimeout(function() {
            zwischentitel.forEach(function(element) {
                element.classList.add('visible');
            });
        }, 100); 
    
        let transcontent = document.querySelectorAll('.transition-content');
        setTimeout(function() {
            transcontent.forEach(function(element) {
                element.classList.add('visible');
            });
        }, 600); 
    
        let bandersnatch = document.querySelectorAll('.bandersnatch');
        setTimeout(function() {
            bandersnatch.forEach(function(element) {
                element.classList.add('visible');
            });
        }, 1100); 

    }

    

});




   window.addEventListener('scroll', function() {
    const sectionContents = document.querySelectorAll('.section-content');
    sectionContents.forEach(content => {
        if (content.getBoundingClientRect().top < window.innerHeight / 1.5) {
            content.classList.add('visible');
        } else {
            content.classList.remove('visible');
        }
    });
});



window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const speed = section.getAttribute('data-parallax-speed');
        section.style.backgroundPositionY = -(window.pageYOffset * speed) + 'px';
    });
});

/* Wiederholung der Funktion, damit das Bild am Anfang richtig lädt */
const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const speed = section.getAttribute('data-parallax-speed');
        section.style.backgroundPositionY = -(window.pageYOffset * speed) + 'px';
    });

    

