

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



const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const speed = section.getAttribute('data-parallax-speed');
        section.style.backgroundPositionY = -(window.pageYOffset * speed) + 'px';
    });

    



const videoPlayer = document.getElementById('moviePlayer');
const choiceButtons = document.getElementById('choiceButtons');
const reset = document.getElementById('reset');
let buttonsShown = false;

videoPlayer.ontimeupdate = function() {
    const timeLeft = videoPlayer.duration - videoPlayer.currentTime;
    if (timeLeft <= 5 && !buttonsShown) {
        choiceButtons.style.display = "flex"; 
    } else if (timeLeft > 5 && buttonsShown) {
        choiceButtons.style.display = "none"; 
        buttonsShown = false;
    }
};

function playVideo(videoPath) {
    videoPlayer.src = videoPath;
    videoPlayer.load();
    videoPlayer.play();
    choiceButtons.style.display = "none"; 
    reset.style.display = "inline-block"; 
    buttonsShown = false;
}








/*
function reset(videoPath) {
    videoPlayer.src = videoPath;
    videoPlayer.load();
    reset.style.display = "none"; 
}
*/



