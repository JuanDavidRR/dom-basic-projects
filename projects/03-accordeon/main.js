let accordeon = document.querySelectorAll('.content-container')
const div = document.querySelector('div');

for (let i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener('click', () => {
        accordeon[i].classList.toggle('active')
    })
    
}