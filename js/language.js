/* ========================================
   MOOD MUSIC — Language Module
   Language chip selection and save logic
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    const chips = document.querySelectorAll('.lang-chip');
    const saveBtn = document.getElementById('btn-save-languages');

    // --- Toggle chip selection ---
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('selected');
        });
    });

    // --- Save & Continue ---
    saveBtn.addEventListener('click', () => {
        const selected = document.querySelectorAll('.lang-chip.selected');

        if (selected.length === 0) {
            showToast('Please select at least one language');
            return;
        }

        AppState.selectedLanguages = Array.from(selected).map(c => c.dataset.lang);
        showToast(`${AppState.selectedLanguages.length} language(s) saved ✓`);
        setTimeout(() => {
            showPage('page-main');
            initMainPage();
        }, 500);
    });
});
