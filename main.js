const paragraph1 = document.querySelector
('p')
paragraph1.style.color = 'lightblue';

const header = document.querySelector
('h1')
header.style.fontSize = '5em'

paragraph1.innerText = 'Ipsum:';

const item13 = document.querySelector('#item-13');

item13.style.opacity = "0.5"

const item3 = document.querySelector('#item-3');

item3.innerText = ('I say, "Hi!"');

const image = document.querySelector('img');

image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
image.height = '300px';

const newImage = document.createElement('img');
const div = document.querySelector('div');
div.appendChild(newImage);
newImage.src = 'greek_alexander_the_great.jpg'
newImage.height = '300'

const item16 = document.createElement('li');
item16.class = 'item';
item16.id = 'item-16';
item16.innerText = "I won't be fooled again."
list = document.querySelector('ul');
list.appendChild(item16);

