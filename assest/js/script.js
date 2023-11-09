function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('show');
}

function showPhoto(selectedPhoto) {
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`photo${i}`).style.display = 'none';
    }
    document.getElementById(`photo${selectedPhoto}`).style.display = 'block';
}

function showImage(selectedImage) {
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`image${i}`).style.display = 'none';
    }
    document.getElementById(`image${selectedImage}`).style.display = 'block';
}

function showCard(selectedCard) {
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`Card${i}`).style.display = 'none';
    }
    document.getElementById(`Card${selectedCard}`).style.display = 'block';
}

function init() {
    for (let i = 1; i <= 7; i++) {
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

// Write This Code Deepak Try Side Button Scroll 
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const container = document.getElementById('scroll-container1');        
    if (scrollPosition < 400) {       
        container.style.background = `rgba(255, 255, 255, 0.5) url('your-background-image.jpg')`;
        container.style.backdropFilter = 'blur(2px)';
    } else if (scrollPosition < 1000) {
        container.style.backgroundColor = 'black';
    } else if (scrollPosition < 1500) {
        container.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'black';
    }
});
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const container = document.getElementById('scroll-container2');       
    if (scrollPosition < 400) {       
        container.style.background = `rgba(255, 255, 255, 0.5) url('your-background-image.jpg')`;
        container.style.backdropFilter = 'blur(2px)';
    } else if (scrollPosition < 1000) {
        container.style.backgroundColor = 'black';
    } else if (scrollPosition < 1500) {
        container.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'black';
    }
});
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const container = document.getElementById('scroll-container3');        
    if (scrollPosition < 400) {       
        container.style.background = `rgba(255, 255, 255, 0.5) url('your-background-image.jpg')`;
        container.style.backdropFilter = 'blur(2px)';
    } else if (scrollPosition < 1000) {
        container.style.backgroundColor = 'black';
    } else if (scrollPosition < 1500) {
        container.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'black';
    }
});
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const container = document.getElementById('scroll-container4');        
    if (scrollPosition < 400) {       
        container.style.background = `rgba(255, 255, 255, 0.5) url('your-background-image.jpg')`;
        container.style.backdropFilter = 'blur(2px)';
    } else if (scrollPosition < 1000) {
        container.style.backgroundColor = 'black';
    } else if (scrollPosition < 1500) {
        container.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'black';
    }
});
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const container = document.getElementById('scroll-container5');        
    if (scrollPosition < 400) {       
        container.style.background = `rgba(255, 255, 255, 0.5) url('your-background-image.jpg')`;
        container.style.backdropFilter = 'blur(2px)';
    } else if (scrollPosition < 1000) {
        container.style.backgroundColor = 'black';
    } else if (scrollPosition < 1500) {
        container.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'black';
    }
});
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const container = document.getElementById('scroll-container6');        
    if (scrollPosition < 400) {       
        container.style.background = `rgba(255, 255, 255, 0.5) url('your-background-image.jpg')`;
        container.style.backdropFilter = 'blur(2px)';
    } else if (scrollPosition < 1000) {
        container.style.backgroundColor = 'black';
    } else if (scrollPosition < 1500) {
        container.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'black';
    }
});
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const container = document.getElementById('scroll-container7');        
    if (scrollPosition < 400) {       
        container.style.background = `rgba(255, 255, 255, 0.5) url('your-background-image.jpg')`;
        container.style.backdropFilter = 'blur(2px)';
    } else if (scrollPosition < 1000) {
        container.style.backgroundColor = 'black';
    } else if (scrollPosition < 1500) {
        container.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'black';
    }
});

