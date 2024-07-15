document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    const hoverSrc = 'Resources/pic_5.png'; 

    images.forEach(image => {
        const originalSrc = image.src;
        image.addEventListener('mouseover', () => {
            image.src = hoverSrc;
        });
        image.addEventListener('mouseout', () => {
            image.src = originalSrc;
        });
    });
    const contactBtn = document.getElementById('contactBtn');
  const contactForm = document.getElementById('contactForm');

  contactBtn.addEventListener('click', function() {
    contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
  });

//   const images2 = [
//     "Resources/food_fourth1.png",
//     "Resources/Front_image.webp",
//     "ResourcesResources/pic_2.png"
//   ];
//   const colors = [
//     '#ff9999', // Light red
//     '#99ff99', // Light green
//     '#9999ff'  // Light blue
//   ];
//   let imageBox = document.getElementById('imageBox');
//   let contentDivs = document.querySelectorAll('.cont');



//   function changeColor(index) {
//     cont[index].classList.toggle('red');
// }
//   // Initial image setup
//   let currentIndex = 0;

//   // Add click event listeners to content divs
//   contentDivs.forEach((div, index) => {
//     div.addEventListener('click', () => {
//       currentIndex = index;
//       imageBox.querySelector('img').src = `url(${images2[currentIndex]})`;
//     });
//   });

function changeImage(imageName,element) {
  
  document.getElementById('displayedImage').src = imageName;
  changeColor(element);
}
  function changeColor(element) {
    // Reset background color for all .cont elements
    var containers = document.querySelectorAll('.cont');
    containers.forEach(function(item) {
        item.style.backgroundColor = '';
    });
    element.style.backgroundColor = 'red';
}
});
