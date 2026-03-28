/* ============================================================
   FTmaster — Proposta 2 — JavaScript
   ============================================================ */

document.body.classList.add('js-ready');

/* ── Mobile Menu ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.body.style.overflow =
    document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}

/* ── Scroll Reveal ── */
(function() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(function(el) {
      el.classList.add('visible');
    });
    return;
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -10px 0px' });

  requestAnimationFrame(function() {
    document.querySelectorAll('.fade-in').forEach(function(el) {
      observer.observe(el);
    });
  });
})();

/* ── Smooth Scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    var t = document.querySelector(href);
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      var menu = document.getElementById('mobileMenu');
      if (menu && menu.classList.contains('open')) toggleMenu();
    }
  });
});

/* ── Active nav link by current page ── */
(function() {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    var href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── Phone mask ── */
document.addEventListener('input', function(e) {
  if (e.target.type === 'tel') {
    var v = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 6) v = '(' + v.slice(0,2) + ') ' + v.slice(2,7) + '-' + v.slice(7);
    else if (v.length > 2) v = '(' + v.slice(0,2) + ') ' + v.slice(2);
    else if (v.length > 0) v = '(' + v;
    e.target.value = v;
  }
});

/* ── Contact form ── */
(function() {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = form.querySelector('.form-submit');
    var orig = btn.innerHTML;
    btn.innerHTML = '✓ Mensagem enviada!';
    btn.disabled = true;
    btn.style.background = '#30d158';
    form.reset();
    setTimeout(function() {
      btn.innerHTML = orig;
      btn.disabled = false;
      btn.style.background = '';
    }, 3000);
  });
})();
