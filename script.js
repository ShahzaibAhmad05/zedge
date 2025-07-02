// Theme Management
let currentTheme = 'light';

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '🌙';
    } else {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '☀️';
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
}

themeToggle.addEventListener('click', toggleTheme);

// Simple loading screen - hide after 1 second
function hideLoading() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.remove();
        }, 500);
    }, 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    applyTheme(currentTheme);
    hideLoading();
});