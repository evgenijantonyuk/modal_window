const modalMain = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const modalOpen = document.querySelector('.section__button')

modalOpen.addEventListener('click', (event) => {
    event.preventDefault()
    modalMain.classList.add('open')
})

modalClose.addEventListener('click', (event) => {
    event.preventDefault()
    modalMain.classList.remove('open')
})
