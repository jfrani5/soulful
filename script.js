
const slidingMenu = () => {
   const burger = document.querySelector('.burger');
   const links = document.querySelector('.menu');
   const anchors = document.querySelectorAll('li');

   burger.addEventListener('click', () => {

      links.classList.toggle('slide');

      anchors.forEach((anchor, index) => {
         if (anchor.style.animation) {
            anchor.style.animation = "";
         } else {
            anchor.style.animation = (`slideOut 0.5s ease forwards ${index / 10 +0.3}s`);
         }
      });
   });
}

slidingMenu();