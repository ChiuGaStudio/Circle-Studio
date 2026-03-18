(() => {
  const STORAGE_KEY = 'chiuga-lang';
  const toggle = document.getElementById('langToggle');
  let current = localStorage.getItem(STORAGE_KEY) || 'en';

  function applyLang(lang) {
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';

    // Update all translatable elements
    document.querySelectorAll('[data-en][data-zh]').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (el.tagName === 'A' || el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2') {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    // Update active state on toggle buttons
    toggle.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  toggle.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-option');
    if (btn) {
      applyLang(btn.dataset.lang);
    } else {
      // Click anywhere on the toggle — swap
      applyLang(current === 'en' ? 'zh' : 'en');
    }
  });

  // Init
  applyLang(current);
})();
