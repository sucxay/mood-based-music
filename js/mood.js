/* ========================================
   MOOD MUSIC — Mood Search Module
   Keyword matching, song filtering, rendering
   ======================================== */

// Mood keyword map
const MOOD_KEYWORDS = {
    sad: ['sad', 'crying', 'tears', 'depressed', 'down', 'blue', 'lonely', 'alone', 'miss', 'missing', 'grief', 'sorrow', 'gloomy', 'unhappy', 'melancholy', 'low', 'broken'],
    happy: ['happy', 'joy', 'joyful', 'cheerful', 'excited', 'great', 'wonderful', 'amazing', 'blessed', 'good', 'smile', 'smiling', 'elated', 'delighted', 'glad', 'content', 'fantastic'],
    energetic: ['energetic', 'pumped', 'energy', 'workout', 'gym', 'running', 'fired up', 'hyped', 'adrenaline', 'power', 'strong', 'beast', 'intense', 'hustle', 'grind'],
    romantic: ['romantic', 'love', 'in love', 'crush', 'date', 'valentine', 'romance', 'affection', 'relationship', 'partner', 'beloved', 'soulmate', 'passion', 'tender', 'adore'],
    heartbroken: ['heartbroken', 'heartbreak', 'breakup', 'broke up', 'ex', 'over it', 'moved on', 'dumped', 'rejected', 'left me', 'cheated', 'lost love', 'separation', 'betrayed'],
    calm: ['calm', 'chill', 'relax', 'relaxed', 'peaceful', 'zen', 'meditation', 'tranquil', 'serene', 'quiet', 'soothing', 'wind down', 'unwind', 'mellow', 'easy', 'gentle', 'sleep', 'sleepy'],
    angry: ['angry', 'mad', 'furious', 'rage', 'frustrated', 'annoyed', 'irritated', 'pissed', 'hate', 'aggressive', 'violent', 'destroy', 'scream', 'fight'],
    party: ['party', 'dance', 'dancing', 'club', 'rave', 'celebrate', 'celebration', 'friday', 'night out', 'turn up', 'bass', 'groove', 'vibe', 'lit', 'fun'],
    nostalgic: ['nostalgic', 'nostalgia', 'old', 'remember', 'memories', 'throwback', 'classic', 'vintage', 'retro', 'childhood', 'past', 'reminisce', 'back in the day', 'good old days'],
    motivational: ['motivated', 'motivation', 'inspire', 'inspired', 'inspiring', 'determined', 'focused', 'goal', 'ambitious', 'achieve', 'success', 'winner', 'champion', 'believe', 'unstoppable', 'never give up', 'keep going', 'confidence', 'confident'],
};

// --- Detect mood from user input ---
function detectMood(input) {
    const lower = input.toLowerCase();
    let bestMood = null;
    let bestScore = 0;

    for (const [mood, keywords] of Object.entries(MOOD_KEYWORDS)) {
        let score = 0;
        for (const keyword of keywords) {
            if (lower.includes(keyword)) {
                score += keyword.split(' ').length; // multi-word matches score higher
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestMood = mood;
        }
    }

    return bestMood;
}

// --- Filter songs by mood + selected languages ---
function getSongsForMood(mood) {
    const langs = AppState.selectedLanguages;
    return window.SONG_DATABASE.filter(song =>
        song.mood === mood && langs.includes(song.language)
    );
}

// --- Render song cards ---
function renderSongs(songs, mood) {
    const resultsSection = document.getElementById('results-section');
    const moodHero = document.querySelector('.mood-hero');

    if (!songs || songs.length === 0) {
        resultsSection.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
        <h4>No songs found</h4>
        <p>Try a different mood or add more languages in your preferences.</p>
      </div>
    `;
        moodHero.classList.add('has-results');
        return;
    }

    moodHero.classList.add('has-results');

    let html = `
    <div class="results-header">
      <h3>Songs for your mood</h3>
      <span class="mood-tag">${mood}</span>
    </div>
    <div class="songs-grid">
  `;

    for (const song of songs) {
        html += `
      <div class="song-card">
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/${song.youtubeId}"
            title="${song.title} by ${song.artist}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        <div class="song-info">
          <div class="song-title">${song.title}</div>
          <div class="song-artist">${song.artist}</div>
          <span class="song-lang-tag">${song.language}</span>
        </div>
      </div>
    `;
    }

    html += '</div>';
    resultsSection.innerHTML = html;
}

// --- Search handler ---
let searchTimeout;

function handleMoodSearch(input) {
    clearTimeout(searchTimeout);

    if (!input.trim()) {
        const resultsSection = document.getElementById('results-section');
        resultsSection.innerHTML = '';
        document.querySelector('.mood-hero').classList.remove('has-results');
        return;
    }

    searchTimeout = setTimeout(() => {
        const mood = detectMood(input);
        if (mood) {
            const songs = getSongsForMood(mood);
            renderSongs(songs, mood);
        } else {
            // No mood detected — show hint
            const resultsSection = document.getElementById('results-section');
            resultsSection.innerHTML = `
        <div class="no-results">
          <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          <h4>Hmm, couldn't detect a mood</h4>
          <p>Try describing how you feel: "I'm feeling sad", "pumped up for a workout", "in love"...</p>
        </div>
      `;
            document.querySelector('.mood-hero').classList.add('has-results');
        }
    }, 400);
}

// --- Init Main Page ---
let _mainInitialized = false;

function initMainPage() {
    const user = AppState.currentUser;

    // Set account button initial
    const accountBtn = document.getElementById('account-btn');
    if (user && user.name) {
        accountBtn.textContent = user.name.charAt(0).toUpperCase();
    }

    // Fill dropdown info
    document.getElementById('user-name').textContent = user ? user.name : 'Guest';
    document.getElementById('user-email').textContent = user ? user.email : '—';

    const badge = document.getElementById('membership-badge');
    badge.textContent = user ? user.membership : 'Free';
    badge.className = 'membership-badge ' + ((user && user.membership === 'Paid') ? 'paid' : 'free');

    // Only bind event listeners once
    if (_mainInitialized) return;
    _mainInitialized = true;

    // Account dropdown toggle
    accountBtn.onclick = (e) => {
        e.stopPropagation();
        const dd = document.getElementById('account-dropdown');
        dd.classList.toggle('show');
    };

    // Logout
    document.getElementById('btn-logout').onclick = () => {
        AppState.currentUser = null;
        AppState.selectedLanguages = [];
        _mainInitialized = false;
        document.getElementById('account-dropdown').classList.remove('show');
        showPage('page-login');
        showToast('Logged out');

        // Reset forms
        document.getElementById('form-login').reset();
        document.getElementById('form-signup').reset();

        // Reset search & results
        document.getElementById('mood-input').value = '';
        document.getElementById('results-section').innerHTML = '';
        document.querySelector('.mood-hero').classList.remove('has-results');

        // Reset language chips
        document.querySelectorAll('.lang-chip').forEach(c => c.classList.remove('selected'));
    };

    // Search input
    const searchInput = document.getElementById('mood-input');
    searchInput.addEventListener('input', (e) => {
        handleMoodSearch(e.target.value);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleMoodSearch(e.target.value);
        }
    });

    // Nav links
    document.getElementById('nav-about').onclick = (e) => {
        e.preventDefault();
        openModal('modal-about');
    };

    document.getElementById('nav-pricing').onclick = (e) => {
        e.preventDefault();
        openModal('modal-pricing');
    };
}

// Export
window.initMainPage = initMainPage;
