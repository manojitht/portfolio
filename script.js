document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Typing Effect for the Hero Title
    const textElement = document.querySelector('.glitch');
    const text = textElement.getAttribute('data-text');
    textElement.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Speed of typing
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);

    // 2. Scroll Animation (Elements fade in when "Scanned")
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section, .timeline-item, .project-card');
    
    sections.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // 3. Random "Glitch" effect on hover for the image
    const imgContainer = document.querySelector('.hero-image-container');
    const reticles = document.querySelectorAll('.reticle');

    imgContainer.addEventListener('mouseenter', () => {
        reticles.forEach(r => {
            r.style.borderColor = '#fff';
            setTimeout(() => {
                r.style.borderColor = '#ff0000';
            }, 200);
        });
    });
});


// --- MODAL FUNCTIONALITY ---
const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("modal-img");

function openModal(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal if user clicks outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}