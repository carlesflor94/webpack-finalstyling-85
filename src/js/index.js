import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../scss/style.scss'

/*show all button*/

document.querySelectorAll('.content__button--common').forEach((button) => {
  const container = button.closest('.content--common')
  const grid = container.querySelector('.grid--common')
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
