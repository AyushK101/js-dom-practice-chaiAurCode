const colorBoxes = document.querySelectorAll('.color-box');
console.dir(colorBoxes);

const body = document.querySelector('body');
console.dir(body);


// colorBoxes.forEach( (button) => {
//  console.dir(button);
//  console.log(button.getAttribute('id'));
 
//  button.addEventListener( 'click', (e) => {
//     body.style.backgroundColor=`${button.getAttribute('id')}`
//  })
 
// })

colorBoxes.forEach( (button) => {
    button.addEventListener('click',(e) => {
        console.log(e);
        console.log(e.target);
        body.style.backgroundColor = `${e.target.id}`;
    })
})