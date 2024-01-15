const cookieImg = document.getElementById('cookie-img');
const breakSound = new Audio('sounds/break.mp3');
const heartClick = document.getElementById('heart-icon');
const cookieBreak = document.getElementById('cookie_break'); 
let clickCounter = 0; 

heartClick.addEventListener('click', function() {
    cookieImg.src = 'assets/cookie_break.png'; 
    breakSound.play();
    clickCounter++; 
    
    document.getElementById('click-counter').textContent = clickCounter + " cookies quebrados"; // Atualiza o texto do contador
    setTimeout(function() {
        cookieImg.src = 'assets/cookie.png'; 
    }, 1000); 
    
    if(clickCounter === 10){
        cookieImg.style.display = 'none';
        cookieBreak.src = 'assets/cookie_break.png'; 
        cookieBreak.style.display = 'block';
        document.getElementById('paragraph-end').textContent = "Agora você tem 3 pedaços de cookie, divida com seus amigos. Para dividir é só clicar em enviar!";
        
    }
});


