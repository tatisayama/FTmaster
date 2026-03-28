/* ============================================
   FTmaster - JavaScript Interactivity
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initCounters();
  initMobileMenu();
  initFormValidation();
  initSmoothScroll();
});

/* ── Navbar Scroll Effect ── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check on load
}

/* ── Scroll Reveal Animation ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
  });

  // Small delay so layout is settled, then observe
  requestAnimationFrame(() => {
    reveals.forEach(el => observer.observe(el));
  });
}

/* ── Counter Animation ── */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-counter'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 2000;
    const startTime = performance.now();
    
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      
      el.textContent = prefix + current.toLocaleString('pt-BR') + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    
    requestAnimationFrame(update);
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(el => observer.observe(el));
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const menu = document.querySelector('.navbar__menu');
  const overlay = document.querySelector('.navbar__overlay');
  
  if (!hamburger || !menu) return;
  
  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  };
  
  hamburger.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', toggleMenu);
  
  // Close on link click
  menu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('open')) toggleMenu();
    });
  });
}

/* ── Form Validation ── */
function initFormValidation() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    const fields = form.querySelectorAll('[required]');
    
    fields.forEach(field => {
      removeError(field);
      
      if (!field.value.trim()) {
        showError(field, 'Este campo é obrigatório');
        isValid = false;
      } else if (field.type === 'email' && !isValidEmail(field.value)) {
        showError(field, 'Digite um e-mail válido');
        isValid = false;
      } else if (field.type === 'tel' && !isValidPhone(field.value)) {
        showError(field, 'Digite um telefone válido');
        isValid = false;
      }
    });
    
    if (isValid) {
      showSuccess(form);
    }
  });
  
  // Real-time validation
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => {
      removeError(field);
      if (field.hasAttribute('required') && !field.value.trim()) {
        showError(field, 'Este campo é obrigatório');
      }
    });
    
    field.addEventListener('input', () => {
      removeError(field);
    });
  });
}

function showError(field, message) {
  field.style.borderColor = '#FF4757';
  field.style.boxShadow = '0 0 0 4px rgba(255, 71, 87, 0.15)';
  
  const error = document.createElement('span');
  error.className = 'form-error';
  error.textContent = message;
  error.style.cssText = 'color: #FF4757; font-size: 0.75rem; margin-top: 4px; display: block;';
  
  field.parentNode.appendChild(error);
}

function removeError(field) {
  field.style.borderColor = '';
  field.style.boxShadow = '';
  
  const existing = field.parentNode.querySelector('.form-error');
  if (existing) existing.remove();
}

function showSuccess(form) {
  const btn = form.querySelector('.form-submit');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = '✓ Mensagem Enviada!';
  btn.style.background = '#00D4AA';
  btn.style.color = '#0D0D2B';
  btn.disabled = true;
  
  form.reset();
  
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
  }, 3000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 11;
}

/* ── Smooth Scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ── Phone Mask ── */
document.addEventListener('input', (e) => {
  if (e.target.type === 'tel') {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    e.target.value = value;
  }
});

/* ── Active Nav Link ── */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);
