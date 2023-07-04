const menu = document.querySelector('.menu')
const navMenu = document.querySelector('#nav-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
    
})

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('active')
    navMenu.classList.remove('active')
}))