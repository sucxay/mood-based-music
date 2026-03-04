/* ========================================
   MOOD MUSIC — Auth Module
   Login / Signup / Guest logic
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    const loginTab = document.getElementById('tab-login');
    const signupTab = document.getElementById('tab-signup');
    const loginForm = document.getElementById('form-login');
    const signupForm = document.getElementById('form-signup');

    // --- Tab Switching ---
    loginTab.addEventListener('click', () => {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    signupTab.addEventListener('click', () => {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    // --- Login Form ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            showToast('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            showToast('Please enter a valid email');
            return;
        }

        // Simulate login
        AppState.currentUser = {
            name: email.split('@')[0],
            email: email,
            membership: 'Free',
        };

        showToast('Welcome back! 🎶');
        setTimeout(() => showPage('page-language'), 600);
    });

    // --- Signup Form ---
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;

        if (!name || !email || !password) {
            showToast('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            showToast('Please enter a valid email');
            return;
        }

        if (password.length < 6) {
            showToast('Password must be at least 6 characters');
            return;
        }

        // Simulate signup
        AppState.currentUser = {
            name: name,
            email: email,
            membership: 'Free',
        };

        showToast('Account created! 🎉');
        setTimeout(() => showPage('page-language'), 600);
    });

    // --- Google Login ---
    document.getElementById('btn-google').addEventListener('click', () => {
        showToast('Google Sign-In coming soon!');
    });

    // --- Guest Login ---
    document.getElementById('btn-guest').addEventListener('click', () => {
        AppState.currentUser = {
            name: 'Guest',
            email: '—',
            membership: 'Free',
        };

        showToast('Continuing as Guest 🎵');
        setTimeout(() => showPage('page-language'), 600);
    });
});

// --- Helpers ---
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
