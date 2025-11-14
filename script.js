// Star button toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const starButtons = document.querySelectorAll('.star-button');
  
  starButtons.forEach(button => {
    button.addEventListener('click', function() {
      const svg = this.querySelector('svg');
      const path = svg.querySelector('path');
      
      // Toggle starred class
      this.classList.toggle('starred');
      
      // Toggle fill
      if (this.classList.contains('starred')) {
        path.setAttribute('fill', 'white');
      } else {
        path.setAttribute('fill', 'none');
      }
    });
  });
});


