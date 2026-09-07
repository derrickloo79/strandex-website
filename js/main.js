(function () {
  'use strict';

  /* -------------------------------- Nav menu -------------------------------- */

  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  function closeNav() {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  }

  function openNav() {
    navLinks.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close menu');
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.contains('is-open');
      if (isOpen) closeNav(); else openNav();
    });

    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', function (event) {
      if (!navLinks.classList.contains('is-open')) return;
      if (navLinks.contains(event.target) || navToggle.contains(event.target)) return;
      closeNav();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 896) closeNav(); // matches the 56rem desktop breakpoint
    });
  }

  /* ---------------------------- Gallery lightbox --------------------------- */

  var lightbox = document.getElementById('lightbox');
  var lightboxContent = document.getElementById('lightbox-content');
  var lightboxClose = document.getElementById('lightbox-close');
  var galleryItems = document.querySelectorAll('.gallery-item');

  function openLightbox(caption) {
    lightboxContent.textContent = caption || '';
    lightbox.hidden = false;
    lightboxClose.focus();
    document.addEventListener('keydown', onLightboxKeydown);
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.removeEventListener('keydown', onLightboxKeydown);
  }

  function onLightboxKeydown(event) {
    if (event.key === 'Escape') closeLightbox();
  }

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(item.getAttribute('data-caption'));
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeLightbox();
    });
  }

  /* ------------------------------ Contact form ------------------------------ */

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      status.textContent = 'Sending…';
      status.removeAttribute('data-state');

      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent =
              "Thanks — we've received your enquiry and will get back to you within 1–2 business days.";
            status.setAttribute('data-state', 'success');
            form.reset();
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(function () {
          status.textContent =
            "That didn't go through. Check your details and try again, or email us directly.";
          status.setAttribute('data-state', 'error');
        });
    });
  }
})();
