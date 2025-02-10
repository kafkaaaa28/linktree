let toggle = document.getElementById('check');
let bglink = document.getElementById('bg-link');
let gradientButton = document.querySelectorAll('.gradient-buttons');
bglink.style.backgroundPosition = 'center';
bglink.style.objectFit = 'cover';

function updateBackground() {
  if (toggle.checked) {
    if (window.innerWidth <= 768) {
      bglink.style.backgroundImage = "url('modemobile.webp')";
      gradientButton.forEach(function (e) {
        e.style.transition = 'background-image 0.5s ease';
        e.style.backgroundImage = 'linear-gradient(to right, #43328C, #ae95c3, #77DACC)';
        e.addEventListener('mouseenter', function () {
          e.style.backgroundImage = 'linear-gradient(to right, #77DACC, #ae95c3, #43328C)';
        });
        e.addEventListener('mouseleave', function () {
          e.style.backgroundImage = 'linear-gradient(to right, #43328C, #ae95c3, #77DACC)';
        });
      });
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      bglink.style.backgroundImage = "url('modetablet.webp')";
      gradientButton.forEach(function (e) {
        e.style.transition = 'background-image 0.5s ease';
        e.style.backgroundImage = 'linear-gradient(to right, #54F528, black, #010101)';
        e.addEventListener('mouseenter', function () {
          e.style.backgroundImage = 'linear-gradient(to right, black, black, #54F528)';
        });
        e.addEventListener('mouseleave', function () {
          e.style.backgroundImage = 'linear-gradient(to right, #54F528, black, black)';
        });
      });
    } else if (window.innerWidth > 1024) {
      bglink.style.backgroundImage = "url('modedekstop.webp')";
      gradientButton.forEach(function (e) {
        e.style.transition = 'background-image 0.5s ease';
        e.style.backgroundImage = 'linear-gradient(to right, #F1D1B7, #AEA672, #203D41)';
        e.addEventListener('mouseenter', function () {
          e.style.backgroundImage = 'linear-gradient(to right, #203D41, #AEA672, #F1D1B7)';
        });
        e.addEventListener('mouseleave', function () {
          e.style.backgroundImage = 'linear-gradient(to right, #F1D1B7, #AEA672, #203D41)';
        });
      });
    }
  } else {
    if (window.innerWidth <= 768) {
      bglink.style.backgroundImage = "url('mobile.webp')";
      gradientButton.forEach(function (e) {
        e.style.transition = 'background-image 0.5s ease';
        e.style.backgroundImage = 'linear-gradient(to right, #111226, #ae95c3, #6337ac)';
        e.addEventListener('mouseenter', function () {
          e.style.backgroundImage = 'linear-gradient(to right, #6337ac, #ae95c3, #111226)';
        });
        e.addEventListener('mouseleave', function () {
          e.style.backgroundImage = 'linear-gradient(to right, #111226, #ae95c3, #6337ac)';
        });
      });
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      bglink.style.backgroundImage = "url('tablet.webp')";
      gradientButton.forEach(function (e) {
        e.style.transition = 'background-image 0.5s ease';
        e.style.backgroundImage = ' linear-gradient(to right, #ffffff, #494a5c, black)';
        e.addEventListener('mouseenter', function () {
          e.style.backgroundImage = ' linear-gradient(to right, black,rgb(195, 195, 195), #ffffff)';
        });

        e.addEventListener('mouseleave', function () {
          e.style.backgroundImage = ' linear-gradient(to right, #ffffff, #494a5c, black)';
        });
      });
    } else if (window.innerWidth > 1024) {
      bglink.style.backgroundImage = "url('dekstop.webp')";
      gradientButton.forEach(function (e) {
        e.style.transition = 'background-image 0.5s ease';
        e.style.backgroundImage = ' linear-gradient(to right, #d9fdfc, #4b557a, #0b1222)';
        e.addEventListener('mouseenter', function () {
          e.style.backgroundImage = ' linear-gradient(to right, #0b1222, #4b557a, #d9fdfc)';
        });

        e.addEventListener('mouseleave', function () {
          e.style.backgroundImage = ' linear-gradient(to right, #d9fdfc, #4b557a, #0b1222)';
        });
      });
    }
  }
}

updateBackground();

window.addEventListener('resize', updateBackground);
toggle.addEventListener('change', updateBackground);
