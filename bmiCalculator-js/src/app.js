



const button = document.querySelector('button');

button.addEventListener('click', (e)=>{
    const  weight =parseFloat( document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = weight/(height**2);
    const div = document.createElement('div');
    div.innerText = ` ${bmi.toFixed(2)}`;
    const parentDiv = e.target.parentElement;
    parentDiv.appendChild(div);

})