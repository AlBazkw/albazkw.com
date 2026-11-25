// ALBAZ Engineering — site behaviour (menu, year, quote form)
(function () {
  // Mobile menu: a text button, no icon
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Quote form: opens the visitor's email client with the request filled in,
  // so they can attach a photo of the unit before sending.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var lines = [];
      new FormData(form).forEach(function (value, key) { lines.push(key + ': ' + value); });
      location.href = 'mailto:' + form.dataset.to +
        '?subject=' + encodeURIComponent(form.dataset.subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }
})();
