import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../scss/style.scss'

Swiper.use([Pagination])

/*show all button*/

document.querySelectorAll('.content__button--common').forEach((button) => {
  const container = button.closest('.content--common')
  const grid = container.querySelector('.grid--common')
  const icon = button.querySelector('.content__button--icon')
  const text = button.querySelector('.content__button--text')

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

/*script swiper mobile version*/

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

/*hide and show menu for tablet/mobile version*/

const menu = document.querySelector('.menu')
const menuOpenBtn = document.querySelector('.icon--menu')
const menuCloseBtn = document.querySelector('.icon--close')
const intro = document.querySelector('.intro')

menuOpenBtn.addEventListener('click', () => {
  menu.classList.add('active')
  intro.classList.add('blurred')
})

menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('active')
  intro.classList.remove('blurred')
})
