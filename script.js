document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    const dots = document.querySelectorAll('.bi-dot');
    const hoverSrc = 'Resources/pic_5.png'; 

    images.forEach((image, index) => {
      const originalSrc = image.src;
      image.addEventListener('mouseover', () => {
          image.src = hoverSrc;
      });
      image.addEventListener('mouseout', () => {
          image.src = originalSrc;
      });

      dots[index].addEventListener('mouseover', () => {
          image.src = hoverSrc;
      });

      dots[index].addEventListener('mouseout', () => {
          image.src = originalSrc;
      });
  });
    const contactBtn = document.getElementById('contactBtn');
  const contactForm = document.getElementById('contactForm');

  contactBtn.addEventListener('click', function() {
    contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
  });


  

  const numbers = document.querySelectorAll('.card-title');

            const options = {
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const number = entry.target;
                        const target = +number.getAttribute('data-target');

                        number.classList.remove('hidden');
                        countUp(number, target);
                        observer.unobserve(number);
                    }
                });
            }, options);

            numbers.forEach(number => {
                observer.observe(number);
            });

            function countUp(element, target) {
                let current = 0;
                const increment = target / 200; 

                const updateNumber = () => {
                    current += increment;
                    if (current < target) {
                        element.innerText = Math.ceil(current) + "+";
                      requestAnimationFrame(updateNumber);
  
                    } else {
                        element.innerText = target + "+";
                    }
                };
                updateNumber();
            }

});
