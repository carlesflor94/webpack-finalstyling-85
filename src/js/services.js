import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

/*show all button*/

const button = document.querySelector('.services__button')
const grid = document.querySelector('.services__grid')
const icon = button.querySelector('.services__button--icon')
const text = button.querySelector('.services__button--text')

button.addEventListener('click', () => {
  grid.classList.toggle('expanded')

  if (grid.classList.contains('expanded')) {
    text.textContent = 'Hide'
    icon.src = '../img/hide-icon.svg'
  } else {
    text.textContent = 'Show all'
    icon.src = '../img/expand-icon.svg'
  }
})

/*script mobile version*/

if (document.querySelector('.services--mobile')) {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: false
  })
}
