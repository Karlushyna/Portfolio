const content = document.querySelector('.content');
const footer = document.getElementById('footer');

content.addEventListener('scroll', () => {
  if (content.scrollTop > 50) { // Adjust the value as needed
    footer.style.bottom = '0';
  } else {
    footer.style.bottom = '-50px';
  }
});