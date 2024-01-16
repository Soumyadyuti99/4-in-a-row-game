//  initializing the grid 
for(row=0; row<5; row++){
    for (col = 0; col<6; col++){
        let grd_contnr = document.querySelector('.grid-container');
        var grd_itm = document.createElement('div');
        grd_itm.classList.add('grid-item');
        grd_itm.setAttribute('id',`(${row},${col})`);
        grd_itm.style.border = '2px solid black';
        grd_itm.style.width = '50px';
        grd_itm.style.height = '50px';
        grd_itm.style.borderRadius = '100%';
        grd_contnr.appendChild(grd_itm);

    }
}
//initializing the token drop and win sound
var winSound = new Audio('winSound.wav');
var tokenDrop = new Audio('dropSound.wav');
let winMsg = document.getElementById('winMsg');

// intiliazing the token dropper
for(i=6; i>0; i--){

    var container = document.querySelector('.grid-container');
    var newElement = document.createElement('div');
    newElement.classList.add('token-hover');
    newElement.setAttribute('id',`token-${i}`);
    // newElement.style.border = '2px solid black';
    newElement.style.height = '50px';
    container.insertBefore(newElement, container.firstChild);
}
var elms = document.querySelectorAll('.token-hover');

// hovering the red/blue token to be dropped
var tkn1 = document.querySelector('#token-1');
tkn1.addEventListener('mouseenter',()=>{
    let element = document.createElement('div');
    element.classList.add('del-elm');
    element.style.height = '50px';
    element.style.width = '50px';
    element.style.borderRadius = '50%';
    element.style.backgroundColor = turn;
    tkn1.appendChild(element);
        
});

tkn1.addEventListener('mouseleave',()=>{
    let elm = document.querySelector('.del-elm');
    tkn1.removeChild(elm);

})

var tkn2 = document.querySelector('#token-2');
tkn2.addEventListener('mouseenter',()=>{
    let element = document.createElement('div');
    element.classList.add('del-elm');
    element.style.height = '50px';
    element.style.width = '50px';
    element.style.borderRadius = '50%';
    element.style.backgroundColor = turn;
    tkn2.appendChild(element);
        
});

tkn2.addEventListener('mouseleave',()=>{
    let elm = document.querySelector('.del-elm');
    tkn2.removeChild(elm);

})

var tkn3 = document.querySelector('#token-3');
tkn3.addEventListener('mouseenter',()=>{
    let element = document.createElement('div');
    element.classList.add('del-elm');
    element.style.height = '50px';
    element.style.width = '50px';
    element.style.borderRadius = '50%';
    element.style.backgroundColor = turn;
    tkn3.appendChild(element);
        
});

tkn3.addEventListener('mouseleave',()=>{
    let elm = document.querySelector('.del-elm');
    tkn3.removeChild(elm);

})

var tkn4 = document.querySelector('#token-4');
tkn4.addEventListener('mouseenter',()=>{
    let element = document.createElement('div');
    element.classList.add('del-elm');
    element.style.height = '50px';
    element.style.width = '50px';
    element.style.borderRadius = '50%';
    element.style.backgroundColor = turn;
    tkn4.appendChild(element);
        
});

tkn4.addEventListener('mouseleave',()=>{
    let elm = document.querySelector('.del-elm');
    tkn4.removeChild(elm);

})

var tkn5 = document.querySelector('#token-5');
tkn5.addEventListener('mouseenter',()=>{
    let element = document.createElement('div');
    element.classList.add('del-elm');
    element.style.height = '50px';
    element.style.width = '50px';
    element.style.borderRadius = '50%';
    element.style.backgroundColor = turn;
    tkn5.appendChild(element);
        
});

tkn5.addEventListener('mouseleave',()=>{
    let elm = document.querySelector('.del-elm');
    tkn5.removeChild(elm);

})

var tkn6 = document.querySelector('#token-6');
tkn6.addEventListener('mouseenter',()=>{
    let element = document.createElement('div');
    element.classList.add('del-elm');
    element.style.height = '50px';
    element.style.width = '50px';
    element.style.borderRadius = '50%';
    element.style.backgroundColor = turn;
    tkn6.appendChild(element);
        
});

tkn6.addEventListener('mouseleave',()=>{
    let elm = document.querySelector('.del-elm');
    tkn6.removeChild(elm);

})

// initializing the matrix
var matrix = [];

for (let i = 0; i < 5; i++) {
  matrix[i] = [];
  for (let j = 0; j < 6; j++) {
    matrix[i][j] = 0;
  }
}

var turn = 'red';

function push(value,col) {
    let index = 4;
  
    while (index >= 0) {
      if (matrix[index][col] === 0) {
        matrix[index][col] = value;
        return [index,col];        
      } else {
        index--;
      }      
    }
          
  }

function fillMatrix( tokenPos, turn){
    //takes int values in tokenpos and string values of 'red' or 'blue'
    // in parameters. Example: fillMatrix(2,'blue')

    if (turn === 'red'){
        let ans = push(1,tokenPos);
        return ans;
    }
    else if (turn === 'blue'){
        let ans = push(2,tokenPos);
        return ans;
    }
    

}
function dropToken(col){
    let ans = fillMatrix(col,turn);
    return ans;
}

tkn1.addEventListener('click',()=>{
    let ans = dropToken(0);
    tokenDrop.play();
    let grdColor = document.getElementById(`(${ans[0]},${ans[1]})`);    
    grdColor.style.backgroundColor = turn; 
    if (checkDirections(ans)){
        winMsg.innerText = turn + ' wins!';
        winSound.play();
    }
    if (turn === 'red'){
        turn = 'blue';
    }else{
        turn = 'red';
    }    
    console.log(matrix);

})

tkn2.addEventListener('click',()=>{
    let ans = dropToken(1);
    tokenDrop.play();
    let grdColor = document.getElementById(`(${ans[0]},${ans[1]})`);
    grdColor.style.backgroundColor = turn; 
    if(checkDirections(ans)){
        winMsg.innerText = turn + ' wins!';
        winSound.play();        
    } 
    if (turn === 'red'){
        turn = 'blue';
    }else{
        turn = 'red';
    }  
    console.log(matrix);


})

tkn3.addEventListener('click',()=>{
    let ans = dropToken(2);
    tokenDrop.play();
    let grdColor = document.getElementById(`(${ans[0]},${ans[1]})`);
    grdColor.style.backgroundColor = turn; 
    if (checkDirections(ans)){
        winMsg.innerText = turn + ' jeet gaya!';
        winSound.play();
       
    } 
    if (turn === 'red'){
        turn = 'blue';
    }else{
        turn = 'red';
    }  
    console.log(matrix);


})

tkn4.addEventListener('click',()=>{
    let ans = dropToken(3);
    tokenDrop.play();
    let grdColor = document.getElementById(`(${ans[0]},${ans[1]})`);
    grdColor.style.backgroundColor = turn;
    if (checkDirections(ans)){
        winMsg.innerText = turn + ' wins!';
        winSound.play();        
    }
    if (turn === 'red'){
        turn = 'blue';
    }else{
        turn = 'red';
    }    
    console.log(matrix);


})

tkn5.addEventListener('click',()=>{
    let ans = dropToken(4);
    tokenDrop.play();
    let grdColor = document.getElementById(`(${ans[0]},${ans[1]})`);
    grdColor.style.backgroundColor = turn;
    if (checkDirections(ans)){
        winMsg.innerText = turn + ' wins!';
        winSound.play();        
    }
    if (turn === 'red'){
        turn = 'blue';
    }else{
        turn = 'red';
    }    
    console.log(matrix);


})

tkn6.addEventListener('click',()=>{
    let ans = dropToken(5);
    tokenDrop.play();
    let grdColor = document.getElementById(`(${ans[0]},${ans[1]})`);
    grdColor.style.backgroundColor = turn; 
    if (checkDirections(ans)){
        winMsg.innerText = turn + ' wins!';
        winSound.play();        
    }
    if (turn === 'red'){
        turn = 'blue';
    }else{
        turn = 'red';
    }
    console.log(matrix);

})

function isSafe(ans){
    if ((ans[0]>=0 && ans[0]<=4) && (ans[1]>=0 && ans[1]<=5)){
        return true;
    }
    else{
        return false;
    }
}

function checkDiagonal(ans){
    let count = 0;
    for(let i=1; i<=3; i++){
        console.log(ans);
        let row = ans[0]+i;
        let col = ans[1]+i;
        if (isSafe([row,col])){
            if (matrix[row][col] === matrix[ans[0]][ans[1]]){
                count+=1;
            }
            else{
                break;
            }
        }        
    }
    let count1 = 0;
    for(let i=1; i<=3; i++){
        let row = ans[0]-i;
        let col = ans[1]+i;
        if (isSafe([row,col])){
            if (matrix[row][col] === matrix[ans[0]][ans[1]]){
                count1+=1;
            }
            else{
                break;
            }
        }        
    }
    let count2 = 0;
    for(let i=1; i<=3; i++){
        let row = ans[0]+i;
        let col = ans[1]-i;
        if (isSafe([row,col])){
            if (matrix[row][col] === matrix[ans[0]][ans[1]]){
                count2-=1;
            }
            else{
                break;
            }
        }        
    }
    let count3 = 0;
    for(let i=1; i<=3; i++){
        let row = ans[0]-i;
        let col = ans[1]-i;
        if (isSafe([row,col])){
            if (matrix[row][col] === matrix[ans[0]][ans[1]]){
                count3-=1;
            }
            else{
                break;
            }
        }   
    } 
    // if (count ===3 || count1 ===3 || count2 ===3 
    //     || count3 ===3){
    //         return true;
    //     }
    // return false;
    if((count1 - count2) === 3 || (count - count3) === 3){
        return true;
    }
    return false;

}

function checkVert(ans){
    let count = 0;
    for(let i=1; i<=3; i++){
        let row = ans[0]+i;
        let col = ans[1];
        if (isSafe([row,col])){
            if (matrix[row][col] === matrix[ans[0]][ans[1]]){
                count+=1;
            }
            else{
                break;
            }
        }
        
    }
    let count1 = 0;
    for(let i=1; i<=3; i++){
        let row = ans[0]-i;
        let col = ans[1];
        if (isSafe([row,col])){
            if (matrix[row][col] === matrix[ans[0]][ans[1]]){
                count1+=1;
            }
            else{
                break;
            }
        }
    }
    if (count===3 || count1 ===3){
        return true;
    }
    
    return false;

}

function checkHor(ans){
    let count = 0;
    for(let i=1; i<=3; i++){
        let row = ans[0];
        let col = ans[1]+i;
        if (isSafe([row,col])){
            if (matrix[row][col] === matrix[ans[0]][ans[1]]){
                count+=1;
            }
            else{
                break;
            }
        }
        
    }
    let count1 = 0;
    for(let i=1; i<=3; i++){
        let row = ans[0];
        let col = ans[1]-i;
        if (isSafe([row,col])){
            if (matrix[row][col] === matrix[ans[0]][ans[1]]){
                //count1+=1; 
                count1-=1;
            }
            else{
                break;
            }
        }
    }
    // let diff = 0;
    // diff = count - count1;
    // if (count===3 || count1 ===3){ 
    //     return true;
    // }
    // return false;
    // console.log(diff);
    if((count - count1) === 3){
        return true;
    }
    return false;
}

function checkDirections(ans){
    if (checkDiagonal(ans) ||
    checkVert(ans) ||
    checkHor(ans)){
        return true;
    }
}

