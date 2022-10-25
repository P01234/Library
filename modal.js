const getModal = document.getElementById('modal')
const btn = document.querySelector('.times')
const startModal = document.getElementById('OpenInputArea')
const openModal = function () {
  startModal.addEventListener('click', () => {
    getModal.style.display = 'flex'
  })
}
const closeModal = function () {
  btn.addEventListener('click', () => {
    getModal.style.display = 'none'
  })
}
openModal()
closeModal()
