/* ============================================================
   PREMIOS AL DEPORTE — Demo · main.js
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Selector de fase (demo) ---------- */
  const body = document.body;
  const switcher = document.getElementById('demoSwitcher');
  const toggle = document.getElementById('demoToggle');
  const phaseBtns = document.querySelectorAll('[data-phase-btn]');

  toggle.addEventListener('click', () => switcher.classList.toggle('is-open'));
  document.addEventListener('click', (e) => {
    if (!switcher.contains(e.target)) switcher.classList.remove('is-open');
  });

  function setPhase(phase) {
    body.setAttribute('data-phase', phase);
    phaseBtns.forEach((b) =>
      b.classList.toggle('is-active', b.dataset.phaseBtn === phase)
    );
    // re-evaluar animaciones para elementos que aparecen
    requestAnimationFrame(revealCheck);
  }
  phaseBtns.forEach((b) =>
    b.addEventListener('click', () => setPhase(b.dataset.phaseBtn))
  );

  // Permite forzar la fase por URL (?fase=encurso) para presentaciones
  const urlPhase = new URLSearchParams(location.search).get('fase');
  if (['previo', 'encurso', 'posterior'].includes(urlPhase)) setPhase(urlPhase);

  /* ---------- Navbar scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- Menú móvil ---------- */
  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  const toggleMenu = (open) => {
    const willOpen = open ?? !navLinks.classList.contains('is-open');
    navLinks.classList.toggle('is-open', willOpen);
    burger.classList.toggle('is-open', willOpen);
    burger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  };
  burger.addEventListener('click', () => toggleMenu());
  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => toggleMenu(false))
  );

  /* ---------- Cuenta regresiva ---------- */
  const target = new Date('2026-11-14T20:00:00').getTime();
  const el = {
    d: document.getElementById('cd-days'),
    h: document.getElementById('cd-hours'),
    m: document.getElementById('cd-mins'),
    s: document.getElementById('cd-secs'),
  };
  const pad = (n) => String(Math.max(0, n)).padStart(2, '0');
  function tick() {
    if (!el.d) return;
    const diff = target - Date.now();
    if (diff <= 0) {
      el.d.textContent = el.h.textContent = el.m.textContent = el.s.textContent = '00';
      return;
    }
    el.d.textContent = pad(Math.floor(diff / 86400000));
    el.h.textContent = pad(Math.floor((diff / 3600000) % 24));
    el.m.textContent = pad(Math.floor((diff / 60000) % 60));
    el.s.textContent = pad(Math.floor((diff / 1000) % 60));
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Animaciones reveal al hacer scroll ---------- */
  const revealEls = document.querySelectorAll(
    '.section__head, .about__media, .about__text, .timeline__item, .cat, .talk, .person, .reg__form, .reg__info, .winner, .gallery__item, .loc__text, .loc__map, .live__player, .live__feed, .next__inner'
  );
  revealEls.forEach((e) => e.classList.add('reveal'));

  let io;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((e) => io.observe(e));
  } else {
    revealEls.forEach((e) => e.classList.add('is-visible'));
  }
  function revealCheck() {
    // asegura visibilidad de elementos recién mostrados que ya están en viewport
    revealEls.forEach((e) => {
      const r = e.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) e.classList.add('is-visible');
    });
  }

  /* ---------- Formularios demo ---------- */
  function fakeSubmit(formId, noteId) {
    const form = document.getElementById(formId);
    const note = document.getElementById(noteId);
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (note) note.hidden = false;
      form.querySelectorAll('input,select,textarea').forEach((f) => {
        if (f.type !== 'submit') f.value = '';
      });
    });
  }
  fakeSubmit('regForm', 'regNote');
  fakeSubmit('notifyForm', 'notifyNote');

  /* ---------- Feed en vivo: rotación de "categoría en escena" ---------- */
  const liveNow = document.getElementById('liveNow');
  if (liveNow) {
    const cats = [
      'Deportista del Año',
      'Mejor Entrenador',
      'Revelación',
      'Premio a la Trayectoria',
      'Deporte de Equipo',
    ];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % cats.length;
      liveNow.innerHTML = 'Categoría en escena: <strong>' + cats[i] + '</strong>';
    }, 3500);
  }
})();
