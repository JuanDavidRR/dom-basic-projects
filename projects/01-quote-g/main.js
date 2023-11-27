const quotes = [
    {
        quote: 'Hola soy Paco el malo',
        author: 'Pepito Malito'
    },
    {
        quote: 'Hola soy Maltego el bueno',
        author: 'Maltego Buenito'
    },
    {
        quote: 'Hola soy Milei el libertario',
        author: 'Milei'
    },
    {
        quote: 'Hola soy Petro el guerrillero',
        author: 'Petro Gus'
    },
    {
        quote: 'Hola soy Uribe el paraco',
        author: 'Alvaraco'
    },
    {
        quote: 'Hola soy David el normal',
        author: 'David Romero'
    },
]

const btn = document.querySelector('#new-quote')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

btn.addEventListener('click', () =>{
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    author.innerText = quotes[random].author
    console.log(random);
})

setTimeout(() => {
    anchorTag.click();
}, 1000);