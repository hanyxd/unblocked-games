/* ============================================================
   UNBLOCKED GAMES — Shared site behaviour
   Theme persistence, mobile nav, panic button, animations,
   cursor, smooth scroll, glass-card cursor glow.
   ============================================================ */

/* ---------- Panic button (Esc / backtick) ---------- */
document.addEventListener('keydown', (e) => {
  const panicEnabled = localStorage.getItem('panicToggle') !== 'false';
  if (panicEnabled && (e.key === 'Escape' || e.key === '`')) {
    const panicUrl = localStorage.getItem('panicUrl') || 'https://classroom.google.com';
    window.location.replace(panicUrl);
  }
});

/* ---------- Theme system ---------- */
const THEME_KEY = 'siteTheme';
const THEMES = ['default', 'dark', 'graphite', 'midnight', 'ocean', 'mint', 'sunset', 'rose'];

function getSavedTheme() {
  const t = localStorage.getItem(THEME_KEY);
  return THEMES.includes(t) ? t : 'default';
}

function applyTheme(name) {
  if (!THEMES.includes(name)) name = 'default';
  document.documentElement.setAttribute('data-theme', name);
  // Keep active state in sync on any page that shows theme buttons
  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.theme === name);
  });
}

function setTheme(name) {
  localStorage.setItem(THEME_KEY, name);
  applyTheme(name);
}

function initTheme() {
  applyTheme(getSavedTheme());
}

/* ---------- Mobile nav + navbar shrink ---------- */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (!toggle || !links) return;

  const closeMenu = () => links.classList.remove('open');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    links.classList.toggle('open');
  });

  // Close when a link is tapped
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  // Close when clicking anywhere outside
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') &&
        !links.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on resize back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

/* ---------- Animation toggles + scroll reveal ---------- */
function applyAnimations() {
  const animEnabled = localStorage.getItem('animToggle') !== 'false';
  const blobs = document.querySelectorAll('.blob');

  blobs.forEach((blob) => {
    blob.style.display = animEnabled ? '' : 'none';
  });

  const glassCards = document.querySelectorAll('.glass-card');
  if (!animEnabled) {
    glassCards.forEach((card) => {
      card.style.transition = 'transform 0.001ms, box-shadow 0.001ms, border-color 0.001ms, background 0.001ms';
    });
  }

  if (animEnabled && window.IntersectionObserver) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.scroll-animate').forEach((el) => el.classList.add('is-visible'));
  }
}

/* ---------- Lenis smooth scroll + cursor + card glow ---------- */
function initSmoothButterFeatures() {
  // Lenis (optional; graceful skip if CDN blocked)
  if (typeof Lenis !== 'undefined') {
    try {
      new Lenis({
        autoRaf: true,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } catch (err) { /* ignore */ }
  }

  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    const interactive = document.querySelectorAll(
      'a, button, .glass-card, .game-card, .chip, .slider, input, select, textarea'
    );
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }

  // Cursor-tracking glow on glass cards
  document.querySelectorAll('.glass-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  applyAnimations();
  initSmoothButterFeatures();
});

// Expose for use by inline page scripts (Settings etc.)
window.setTheme = setTheme;
window.applyTheme = applyTheme;
