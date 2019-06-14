const quotes = [
 {
  name:'Stephen King',
  quote: 'Get busy living or get busy dying.'
 },
 {
  name:'Dr. Seuss',
  quote:'Dont cry because its over, smile because it happened.' 
 },
 {
  name: 'Oscar Wilde',
  quote: 'Be yourself; everyone else is already taken.'
 },
 {
  name: 'Albert Einstein',
  quote: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.'
 },
 {
  name: 'Marcus Tullius Cicero',
  quote: 'A room without books is like a body without a soul.'
 },
 {
  name: 'Leo Tolstoy',
  quote: 'If you want to be happe, be.'
 },
 {
  name: 'Leonardo Da Vinci',
  quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them.They went out and happened to things.'
 },
 {
  name:'John F. Kennedy',
  quote:'Those who dare to fail miserably can achieve greatly.'
 },
 {
  name: 'Mae West',
  quote: 'You only live once, but if you do it right, once is enough.'
 },
 {
  name:'Mahatma Ghandi',
  quote: 'Be the change that you wish to see in the world.'
 },
 {
  name: 'Eleanor Roosevelt',
  quote: 'No one can make you feel inferior whitout your consent.'
 }
 ];

 const quotesBtn = document.querySelector('#quoteBtn');
 const quoteAuthor = document.querySelector('#quoteAuthor');
 const quote = document.querySelector('#quote');

 quotesBtn.addEventListener('click',displyQuote);

 function displyQuote(){
  let number = Math.floor(Math.random()*quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
 }