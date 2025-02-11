function toggleMessages() {
    const messages = document.getElementById('hidden-messages');
    if (messages.style.display === 'none' || messages.style.display === '') {
        messages.style.display = 'block';
    } else {
        messages.style.display = 'none';
    }
}