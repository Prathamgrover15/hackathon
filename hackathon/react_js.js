
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        alert(`You clicked on ${link.textContent}`);
    });
});

const heroBtn = document.getElementById('hero-btn');
const heroText = document.getElementById('hero-text');

heroBtn.addEventListener('click', function () {
    heroText.textContent = "Your journey to the perfect cup of coffee starts now!";
    heroBtn.textContent = "Text Updated!";
});

