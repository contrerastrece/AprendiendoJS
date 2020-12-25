export{moveKeys,shortCuts};
let x=0;
let y=0;
function moveKeys(e,ball,board){    
        const $ball=document.querySelector(ball);
        const $board=document.querySelector(board);
        let limitBall=$ball.getBoundingClientRect();    
        let limitBoard=$board.getBoundingClientRect();
            switch (e.keyCode) {
                case 37://izquierda
                    e.preventDefault();
                    if( limitBall.left>limitBoard.left) x--;
                    // console.clear()
                    // console.log(limitBall.left,limitBoard.left)
                    break;
                case 38://arriba
                    e.preventDefault();
                    if( limitBall.top>limitBoard.top) y--;
                    // console.clear()
                    // console.log(limitBall.top,limitBoard.top)   
                    break;
                case 39://derecha
                    e.preventDefault();
                    if( limitBall.right<limitBoard.right) x++;
                    // console.clear()
                    // console.log(limitBall.right,limitBoard.right)
                    break;
                case 40://abajo
                    e.preventDefault();
                    if( limitBall.bottom<limitBoard.bottom) y++;
                    // console.clear()
                    // console.log(limitBall.bottom,limitBoard.bottom)
                    break;
            }
        $ball.style.transform=`translate(${x*10}px,${y*10}px)`;
           
}
    

function shortCuts(e){
    // console.log(e);
    // console.log(e.keyCode);
    // console.log(e.altKey);
    // console.log(e.shiftKey);
    // console.log(e.ctrlKey)
    if(e.altKey && e.key==="a"){
        alert("alt + a");
    }
    if(e.altKey && e.key==="p"){
        prompt("alt + p");
    }
    if(e.altKey && e.key==="c"){
        confirm("alt + c");
    }
}