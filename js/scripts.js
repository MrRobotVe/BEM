const $mainMenu = document.getElementById('main-menu')
const $links = document.querySelectorAll('.menu__link')

$mainMenu.addEventListener('click', function (e) {
  if (e.target.matches('.menu__link')) {
    const $link = e.target
    $links.forEach(link => link.classList.remove('menu__link--active'))
    $link.classList.add('menu__link--active')
  }
})