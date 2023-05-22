let personalPhoto = document.getElementById('my-photo');
let descriptionText = document.getElementById('top-container-text');

const zoomEffect = (event) => {
  let element = event.target;
  element.style.transition = 'transform 0.5s ease-in-out, margin-right 0.5s ease-in-out';
  element.style.transform = 'scale(1.1)';
  element.style.marginRight = '1rem';
}

const zoomEffectOff = (event) => {
  let element = event.target;
  element.style.transition = 'transform 0.5s ease-in-out, margin-right 0.5s ease-in-out';
  element.style.transform = '';
  element.style.marginRight = '';
}

const photoContainers = document.querySelectorAll('.image-container');

photoContainers.forEach((container) => {
  const overlay = container.querySelector('.overlay');

  container.addEventListener('mouseenter', () => {
    overlay.style.opacity = 1;
  });

  container.addEventListener('mouseleave', () => {
    overlay.style.opacity = 0;
  });
});

personalPhoto.addEventListener('mouseover', zoomEffect);
personalPhoto.addEventListener('mouseout', zoomEffectOff);
