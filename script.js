window.onload = function() {
    const birthDate = new Date('1994-09-13');
    const currentDate = new Date();
    const daysLived = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    const thirtiethBirthday = new Date('2024-09-13');
    const totalDaysTill30 = Math.floor((thirtiethBirthday - birthDate) / (1000 * 60 * 60 * 24));
    const progressPercentage = (daysLived / totalDaysTill30) * 100;

    const averageLifespanDays = 82 * 365;
    const percentageLivedOfLifespan = (daysLived / averageLifespanDays) * 100;

    document.querySelector('#progress-age .progress').style.width = progressPercentage + '%';
    document.getElementById('age-progress').innerHTML = `
        <span class="large-text">${progressPercentage.toFixed(2)}%</span>
    `;

    document.querySelector('#progress-life .progress').style.width = percentageLivedOfLifespan + '%';
    document.getElementById('life-progress').innerHTML = `
        <span class="large-text">${percentageLivedOfLifespan.toFixed(2)}%</span>
        <p class="small-text">*based on average male lifespan</p>
    `;

    // Initialize fireworks animation
    const fireworksContainer = document.getElementById('fireworks');
    const fireworks = new Fireworks(fireworksContainer, {
        rocketsPoint: 50,
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        speed: 2,
        acceleration: 1.05,
        friction: 0.98,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        fadeOut: true,
        startDelay: 30,
        boundaries: {
            top: 50,
            bottom: fireworksContainer.clientHeight,
            left: 50,
            right: fireworksContainer.clientWidth
        },
        sound: {
            enable: true,
            files: [
                'https://cdn.jsdelivr.net/npm/fireworks-js@latest/dist/sounds/explosion0.mp3',
                'https://cdn.jsdelivr.net/npm/fireworks-js@latest/dist/sounds/explosion1.mp3',
                'https://cdn.jsdelivr.net/npm/fireworks-js@latest/dist/sounds/explosion2.mp3'
            ],
            volume: { min: 4, max: 8 }
        },
        mouse: {
            click: false,
            move: false,
            max: 1
        }
    });

    fireworks.start();

    // Not Attending button behavior
    const notAttendingButton = document.getElementById('not-attending');
    notAttendingButton.addEventListener('click', () => {
        alert("Yeah right, try again");
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
            } else {
                entry.target.classList.remove('animate__fadeIn');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
};

function openWhatsApp(status) {
    const phoneNumber = '972509781166'; // Replace with your actual phone number
    let message = '';

    if (status === 'attending') {
        message = 'Hey Tom, I am attending.';
    } else if (status === 'attending plus one') {
        message = 'Hey Tom, I am attending PLUS ONE.';
    }

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Attach these functions to the buttons directly
document.querySelector('.attend').onclick = function() {
    openWhatsApp('attending');
}

document.querySelector('.attend-plus-one').onclick = function() {
    openWhatsApp('attending plus one');
}