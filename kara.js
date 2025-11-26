
// Toggle Mobile Menu
  document.querySelectorAll('[data-collapse-toggle]').forEach(btn => {
    const menu = document.getElementById(btn.getAttribute('data-collapse-toggle'));
    btn.addEventListener('click', e => {
      e.stopPropagation(); // prevent immediate close
      menu.classList.toggle('hidden');
    });
  });

  // Dropdown Toggle
  document.querySelectorAll('[data-dropdown-toggle]').forEach(btn => {
    const menu = document.getElementById(btn.getAttribute('data-dropdown-toggle'));
    btn.addEventListener('click', e => {
      e.stopPropagation(); // prevent immediate close
      menu.classList.toggle('hidden');
    });
  });

  // Close dropdown and mobile menu when clicking outside
  document.addEventListener('click', e => {
    // Close all dropdowns
    document.querySelectorAll('[data-dropdown-toggle]').forEach(btn => {
      const menu = document.getElementById(btn.getAttribute('data-dropdown-toggle'));
      if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });

    // Close mobile menus
    document.querySelectorAll('[data-collapse-toggle]').forEach(btn => {
      const menu = document.getElementById(btn.getAttribute('data-collapse-toggle'));
      if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
  });


 //color
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
// const themeToggleBtn = document.getElementById('theme-toggle');

// Load saved theme or system preference
if (localStorage.getItem('color-theme') === 'dark' || 
   (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  themeToggleLightIcon.classList.remove('hidden');
} else {
  document.documentElement.classList.remove('dark');
  themeToggleDarkIcon.classList.remove('hidden');
}

// ---------- THEME TOGGLE ----------
const themeToggleBtn = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");

// Load saved theme
if (localStorage.getItem("color-theme") === "dark" ||
   (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)) {

    document.documentElement.classList.add("dark");
    lightIcon.classList.remove("hidden"); // show sun icon
} else {
    document.documentElement.classList.remove("dark");
    darkIcon.classList.remove("hidden"); // show moon icon
}

// Toggle theme
themeToggleBtn.addEventListener("click", function () {
    darkIcon.classList.toggle("hidden");
    lightIcon.classList.toggle("hidden");

    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
    }
});


// language change
// Get elements
const langToggle = document.getElementById('language-toggle');
const langMenu = document.getElementById('language-menu');
const langLinks = langMenu.querySelectorAll('a[data-lang]');

// Toggle dropdown menu
langToggle.addEventListener('click', () => {
  langMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.add('hidden');
  }
});

// Function to change language
function changeLanguage(lang) {
  localStorage.setItem('lang', lang);

  if (lang === 'fa') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'fa';
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }

  // Update button text
  const selectedLink = langMenu.querySelector(`a[data-lang="${lang}"]`);
  if (selectedLink) langToggle.innerText = selectedLink.innerText;

  // Update page text dynamically (optional)
  updateText(lang);
}

// Update text on the page using data-i18n attributes
const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    asia:"Asia Kara"
  },
  fa: {
    home: "خانه",
    about: " درباره ما",
    services: "خدمات",
    products: "محصولات",
    contact: "تماس",
    asia: "آسیا کارا"
  }
};

function updateText(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Handle language selection
langLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedLang = link.getAttribute('data-lang');
    changeLanguage(selectedLang);
    langMenu.classList.add('hidden');
  });
});

// Initialize saved language
const savedLang = localStorage.getItem('lang') || 'en';
changeLanguage(savedLang);

// colorchange
document.querySelectorAll('.interactive-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});