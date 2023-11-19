const optionButtons = document.querySelectorAll('.option-button');
const options = document.querySelectorAll('.option');

options.forEach(option => option.style.display = 'none');

optionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedOption = button.getAttribute('data-option');
    const selectedOptionElement = document.getElementById(selectedOption);
    
    if (selectedOptionElement.style.display === 'block') {
      selectedOptionElement.style.display = 'none';
    } else {
      options.forEach(option => option.style.display = 'none');
      selectedOptionElement.style.display = 'block';
    }
  });
});

const header = document.querySelector('.header');
let isHeaderVisible = true;
let lastScrollPosition = window.scrollY;

function showHeader() {
  header.classList.remove('header-hidden');
  isHeaderVisible = true;
}

function hideHeader() {
  header.classList.add('header-hidden');
  isHeaderVisible = false;
}

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;
  
  if (currentScrollPosition > lastScrollPosition) {
    hideHeader();
  } else {
    showHeader();
  }

  lastScrollPosition = currentScrollPosition;
});

const menuIcon = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');
const menuItems = document.querySelectorAll('.navbar ul li a');

function closeMenu() {
  navbar.classList.remove('active');
}

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.g-card');
  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightbox-image');
  var lightboxPrev = document.getElementById('lightbox-prev');
  var lightboxNext = document.getElementById('lightbox-next');
  var currentIndex;

  lightboxPrev.addEventListener('click', function () {
    navigate(-1);
  });

  lightboxNext.addEventListener('click', function () {
    navigate(1);
  });

  window.openLightbox = function (index) {
    currentIndex = index;
    showImage();
  };

  function navigate(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = cards.length - 1;
    } else if (currentIndex >= cards.length) {
      currentIndex = 0;
    }

    showImage();
  }

  function showImage() {
    var img = cards[currentIndex].querySelector('img');
    lightboxImage.src = img.src;
    lightbox.style.display = 'flex';

    lightboxPrev.style.display = 'block';
    lightboxNext.style.display = 'block';
  }

  lightbox.addEventListener('click', function (event) {
    if (event.target === this) {
      lightbox.style.display = 'none';
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      lightbox.style.display = 'none';
    }
  });

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      openLightbox(Array.from(cards).indexOf(card));
    });
  });
});

