const sports = document.querySelector('#sports')

sports.addEventListener('click', function(e){
    console.log(e.target.id + ' Clicked');

    const target = e.target

    if (target.matches('li')){
        target.style.backgroundColor = 'gray'
    }
})