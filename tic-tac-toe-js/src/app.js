let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset');
let msg = document.querySelector('.msg');
let turn0 = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach( (box) => {
    box.addEventListener( 'click', (e)=>{
        if(turn0) {
            box.innerHTML = "X";
            turn0 = false;
        } else {
            box.innerHTML = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkWin()
    })
})


function checkWin() {
    for(let pattern of winPatterns) {
        
        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;
        if(pos1 != '' && pos2 != '' && pos3 != '') {
            if( pos1 == pos2 && pos2 == pos3 ) {
                if(pos1 == 'X') {
                    displayMessage('playerX is the winner'); 
                } else {
                    displayMessage('playerO is the winner');
                }
            }
        }
    }
    
}

function disableAfterWin() {
    for(let box of boxes) {
        box.disabled = true;
    }
}

function displayMessage(message) {
    msg.innerHTML=`${message}`;
    msg.removeAttribute('hidden');
    disableAfterWin();
}

function enableBoxes() {
    boxes.forEach( (box) => {
        box.innerHTML = "";
        box.disabled = false;
    })
}

resetBtn.addEventListener('click', (e)=>{
    msg.setAttribute('hidden','true');
   enableBoxes();
    turn0 = true;
})



