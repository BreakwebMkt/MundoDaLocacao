const optionButtons = document.querySelectorAll('.option-button');
const options = document.querySelectorAll('.option');

options.forEach(option => option.style.display = 'none');

optionButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    const selectedOption = button.getAttribute('data-option');
    options.forEach(option => option.style.display = 'none');
    document.getElementById(selectedOption).style.display = 'block';
  });

  button.addEventListener('mouseout', () => {
    const selectedOption = button.getAttribute('data-option');
    document.getElementById(selectedOption).style.display = 'none';
  });
});
