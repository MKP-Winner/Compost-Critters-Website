// Page Navigation
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        // Remove active class from all pages and links
        pages.forEach(page => page.classList.remove('active'));
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to target page and link
        document.getElementById(targetPage).classList.add('active');
        link.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Interactive heart likes on posts
document.querySelectorAll('.post-heart').forEach(heart => {
    heart.addEventListener('click', (e) => {
        e.stopPropagation();
        heart.textContent = heart.textContent === '🤍' ? '❤️' : '🤍';
    });
});

// Task checkbox interactions
document.querySelectorAll('.task-item input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const taskItem = e.target.closest('.task-item');
        if (e.target.checked) {
            taskItem.style.opacity = '0.6';
            taskItem.style.textDecoration = 'line-through';
        } else {
            taskItem.style.opacity = '1';
            taskItem.style.textDecoration = 'none';
        }
    });
});

// Redeem button interaction
const redeemBtn = document.querySelector('.redeem-btn');
if (redeemBtn) {
    redeemBtn.addEventListener('click', () => {
        alert('🎉 Welcome to Compost Critters! Your character has been unlocked!');
    });
}

// Add hover effects to challenge buttons
document.querySelectorAll('.challenge-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This challenge will be available soon! Stay tuned! 🌱');
    });
});