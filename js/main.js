// Al Baz Engineering — site scripts
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Mark the active nav link (works with and without .html / clean URLs)
  var path = (location.pathname.split('/').pop() || 'index').replace(/\.html$/, '');
  document.querySelectorAll('.nav a').forEach(function (a) {
    var href = a.getAttribute('href').replace(/\.html$/, '');
    if (href === './') href = 'index';
    if (href === path) a.classList.add('active');
  });

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Contact form: works with Netlify Forms / Formspree when deployed; falls back to mailto locally
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      if (form.dataset.mode !== 'mailto') return;
      e.preventDefault();
      var f = new FormData(form);
      var body = 'Name: ' + f.get('name') + '\nCompany: ' + f.get('company') +
        '\nEmail: ' + f.get('email') + '\nPhone: ' + f.get('phone') +
        '\nService: ' + f.get('service') + '\nProperty: ' + f.get('property') + '\n\n' + f.get('message');
      location.href = 'mailto:' + form.dataset.to + '?subject=' +
        encodeURIComponent('Website enquiry from ' + f.get('name')) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();
