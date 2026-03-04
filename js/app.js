/* ========================================
   MOOD MUSIC — App Core
   Router, theme toggle, state management
   ======================================== */

// Global state
const AppState = {
    currentUser: null,
    selectedLanguages: [],
    currentPage: 'page-login',
    theme: localStorage.getItem('mood-music-theme') || 'dark',
};

// --- SPA Router ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        // Re-trigger animation
        target.style.animation = 'none';
        target.offsetHeight; // reflow
        target.style.animation = '';
        AppState.currentPage = pageId;
    }
}

// --- Theme Toggle ---
function initTheme() {
    document.documentElement.setAttribute('data-theme', AppState.theme);
}

function toggleTheme() {
    AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', AppState.theme);
    localStorage.setItem('mood-music-theme', AppState.theme);
}

// --- Toast ---
function showToast(message, duration = 2500) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

// --- Modal ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('show');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('show');
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Theme toggle button
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('show');
        });
    });

    // Close account dropdown on outside click
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('account-dropdown');
        const btn = document.getElementById('account-btn');
        if (dropdown && btn && !btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    // Show login page initially
    showPage('page-login');
});

// Export for use in other modules
window.AppState = AppState;
window.showPage = showPage;
window.showToast = showToast;
window.openModal = openModal;
window.closeModal = closeModal;
