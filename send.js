
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', async function() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Cookie-Clicker',
                text: 'Quer um pedaço de cookie?',
                url: 'http://127.0.0.1:5500/' 
            });
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    } else {
       
        alert('Seu navegador não suporta compartilhamento.');
       
    }
});
