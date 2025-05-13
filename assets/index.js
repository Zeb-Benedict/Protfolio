function showSection(sectionId) {
 
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('active');
  });
  
  document.getElementById(sectionId).classList.add('active');
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  
  this.reset();
});