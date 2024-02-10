const Quotes=[
    {
        id:1,
        quote: 'Kindness is one thing you can’t give away. It always comes back.',
        author: 'George Skolsky'
    },
    {
        id:2,
        quote: 'Great things happen to those who dont stop believing, trying, learning, and being grateful.',
        author: 'Roy T. Bennett'
    },
    {
        id:3,
        quote: 'Try to be a rainbow in someone else’s cloud.',
        author: 'Maya Angelou'
    },
    {
        id:4,
        quote: 'Sometimes, when things are falling apart, they may actually be falling into place.',
        author: 'George Skolsky'
    },
    {
        id:5,
        quote: 'Fight for the things that you care about, but do it in a way that will lead others to join you',
        author: 'Ruth Bader Ginsburg'
    },
    {
        id:6,
        quote: 'Happiness is not by chance but by choice',
        author: 'George Skolsky'
    },
    {
        id:7,
        quote: 'Nothing is impossible, the word itself says ‘I’m possible.',
        author: 'Audrey Hepburn '
    },
    {
        id:8,
        quote: 'The most important thing is to try and inspire people so that they can be great in whatever they want to do',
        author: 'Kobe Bryant'
    },
    {
        id:9,
        quote: 'Once you replace negative thoughts with positive ones, youll start having positive results..',
        author: ' Willie Nelson'
    },
    {
        id:10,
        quote: 'Positive anything is better than negative nothing',
        author: 'Elbert Hubbard'
    },

]
//accessing the html elements
const QuoteElem=document.getElementById('quote')
const AuthorElem=document.getElementById('author')
const BtnELe=document.getElementById('btn')

//function to generate random quotes
BtnELe.addEventListener('click',()=>{
    let i=Math.floor(Math.random()* Quotes.length)
    QuoteElem.innerText=Quotes[i].quote
   AuthorElem.innerText=Quotes[i].author

})