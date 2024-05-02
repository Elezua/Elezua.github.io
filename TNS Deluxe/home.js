document.querySelector('#hamburger-menu').addEventListener('click', function() {
    document.querySelector('.tabMenu').classList.toggle('active');
});

document.querySelector('#cancel').addEventListener('click', function() {
    document.querySelector('.tabMenu').classList.remove('active');
});