/* Preview-only behaviour. In Elementor these are handled natively:
   - mobile menu → Nav Menu widget (Pro) or Header template toggle
   - form validation & submission → Form widget (Pro) actions
   Nothing here is required for the layout itself. */
(function () {
  document.documentElement.classList.remove('no-js');

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  // Enquiry form: client-side validation for the preview (no data is sent anywhere)
  var form = document.getElementById('enquiry-form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      form.querySelectorAll('[required]').forEach(function (field) {
        var err = document.getElementById(field.id + '-err');
        var valid = field.checkValidity() && field.value.trim() !== '';
        field.setAttribute('aria-invalid', valid ? 'false' : 'true');
        if (err) {
          err.hidden = valid;
          if (!valid) field.setAttribute('aria-describedby', err.id); else field.removeAttribute('aria-describedby');
        }
        if (!valid && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        status.className = 'form-status';
        status.textContent = 'Some fields need attention. Check the highlighted fields and send again.';
        firstInvalid.focus();
        return;
      }
      status.className = 'form-status is-success';
      status.textContent = 'Enquiry sent. An account director will reply within 4 business hours. (Preview only: nothing was submitted.)';
      form.reset();
      form.querySelectorAll('[aria-invalid]').forEach(function (f) { f.removeAttribute('aria-invalid'); });
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
