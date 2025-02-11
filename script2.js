function toggleMessages() {
    const messages = document.getElementById('hidden-messages');
    if (messages.style.display === 'none' || messages.style.display === '') {
        messages.style.display = 'block';
    } else {
        messages.style.display = 'none';
    }
}
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const haslo = document.getElementById('haslo').value;
    const correctHaslo = 'jacus kocha bardziej'; // Replace with the actual correct password

    if (haslo === correctHaslo) {
        window.location.href = 'main3.html';
    } else {
        alert('Zle haslo... sprobuj ponownie!');
    }
});