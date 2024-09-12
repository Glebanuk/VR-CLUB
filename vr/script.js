
const slider = document.querySelector('.slider');
const sliderDots = document.querySelector('.slider-dots');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Функция для создания точек
function createDots() {
  slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.slide = index; // Присваиваем индексы точкам
    sliderDots.appendChild(dot);
  });

  // Устанавливаем активную точку для первого слайда
  sliderDots.children[0].classList.add('active');
}

// Функция для обновления активной точки
function updateDots(index) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Функция для прокрутки слайдера при клике по точке
sliderDots.addEventListener('click', (event) => {
  if (event.target.classList.contains('dot')) {
    const index = parseInt(event.target.dataset.slide);
    slider.scrollTo({
      left: slider.clientWidth * index,
      behavior: 'smooth'
    });
    currentSlide = index;
    updateDots(currentSlide);
  }
});

// Обновляем активную точку при скролле слайдера
slider.addEventListener('scroll', () => {
  let index = Math.round(slider.scrollLeft / slider.clientWidth);
  if (index !== currentSlide) {
    currentSlide = index;
    updateDots(currentSlide);
  }
});

// Инициализация
createDots();

