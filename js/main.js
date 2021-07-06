const $listElements = document.querySelectorAll('.list__button--click')

$listElements.forEach(listItem => {
  listItem.addEventListener('click', (e) => {
    listItem.classList.toggle('arrow')
    let height = 0
    let menu = listItem.nextElementSibling

    if (menu.clientHeight === 0) {
      height = menu.scrollHeight
    }

    menu.style.height = `${height}px`
  })
})