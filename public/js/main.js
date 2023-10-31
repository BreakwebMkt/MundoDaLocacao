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

