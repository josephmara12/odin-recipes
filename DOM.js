// DOM Manipulation


//Styling Element
/*const title = document.querySelector('#main-heading')

console.log(title);

title.style.color = 'red'

const listItems = document.querySelectorAll('.list-items')


for (i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'green'

}
*/

 //Create element

const ul = document.querySelector('ul')
const li = document.createElement('li')

ul.append(li)