function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('show');
}

function showPhoto(selectedPhoto) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`photo${i}`).style.display = 'none';
    }
    document.getElementById(`photo${selectedPhoto}`).style.display = 'block';
}

function showImage(selectedImage) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`image${i}`).style.display = 'none';
    }
    document.getElementById(`image${selectedImage}`).style.display = 'block';
}

function showCard(selectedCard) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`Card${i}`).style.display = 'none';
    }
    document.getElementById(`Card${selectedCard}`).style.display = 'block';
}

function init() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`radio${i}`).addEventListener('click', function () {
            changePhoto(i);
            showImage(i);
            showCard(i);
        });
    }

    document.getElementById('radio1').click();
    document.getElementById('radio1').parentNode.style.color = 'black';
}

window.addEventListener('load', init);

