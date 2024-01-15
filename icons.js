
const heartIcon = document.getElementById('heart-icon');

heartIcon.addEventListener('click', function() {
    heartIcon.classList.toggle('bx-heart');
    heartIcon.classList.toggle('bxs-heart');
    heartIcon.style.color = 'red';
});

const saveIcon = document.getElementById('save-icon');

saveIcon.addEventListener('click', function() {
    saveIcon.classList.toggle('bx-save');
    saveIcon.classList.toggle('bxs-bookmark-star');
});

const muteIcon = document.getElementById('mute-icon');
const backSound = new Audio('sounds/munchin.mp3'); 

let isMuted = true; 

muteIcon.addEventListener('click', function() {
    console.log("Clicou no ícone de som");
    if (isMuted) {
        backSound.play(); 
        muteIcon.classList.remove('bxs-volume-mute');
        muteIcon.classList.add('bxs-volume-full');
    } else {
        backSound.pause(); 
        backSound.currentTime = 0; 
        muteIcon.classList.remove('bxs-volume-full');
        muteIcon.classList.add('bxs-volume-mute');
    }
    isMuted = !isMuted; 
});


