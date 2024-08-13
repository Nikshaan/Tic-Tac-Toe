const area = document.querySelector(".game-area");
const pt = document.getElementById("player-turn");
const ps = document.getElementById("player-symbol");
const playAgain = document.getElementById("playAgain");

index = 0;
for(i = 0; i < 3; i++){
    let row = document.createElement("div");
    row.setAttribute('class', "box-row");
    area.appendChild(row);

    for(j = 0; j < 3; j++){
        let box = document.createElement('div');
        box.setAttribute('id', index);
        box.setAttribute('class', "box");
        box.setAttribute('onclick', 'playGame(this.id)')
        row.appendChild(box);
        index += 1;
    }

    let newLine = document.createElement("br");
    area.appendChild(newLine);
}

chance = 0;
sym = "";
p1Points = 0;
p2Points = 0;

function playGame(id){
    let current_box = document.getElementById(id);
    if(chance <= 8){
        if (current_box.innerHTML == ""){

            if(chance % 2 == 0){
            sym = 'X';
            pt.innerHTML = "Player 2 needs to Play";
            ps.innerHTML = "You are O";
            }
    
            else{
            sym='O'
            pt.innerHTML = "Player 1 needs to Play";
            ps.innerHTML = "You are X";
            }
    
            let current_sym = document.createElement('p');
            current_sym.innerHTML = sym;
            current_box.appendChild(current_sym);
    
            win_list = [[0,1,2], [3,4,5], [6,7,8], [2,5,8], [0,3,6], [1,4,7], [0,4,8], [2,4,6]];
            
            for(list of win_list){
                let x = document.getElementById(list[0]);
                let y = document.getElementById(list[1]);
                let z = document.getElementById(list[2]);
    
                a = x.innerHTML;
                b = y.innerHTML;
                c = z.innerHTML;
    
                if(a == b && b == c && a == c && a != ""){
                    
                    x.style.backgroundColor = 'green';
                    x.style.transform = 'scale(1.02)';
                    x.style.transition = 'transform 1.5s';
    
                    y.style.backgroundColor = 'green';
                    y.style.transform = 'scale(1.02)';
                    y.style.transition = 'transform 1.5s';
    
                    z.style.backgroundColor = 'green';
                    z.style.transform = 'scale(1.02)';
                    z.style.transition = 'transform 1.5s';
    
                    if(chance % 2 == 0){
                        pt.innerHTML = "Player 1 has WON the Game";
                        pt.style.transform = 'scale(1.05)';
                        pt.style.transition = 'transform 1.5s';
                        ps.style.display = "none";
                        p1Points += 1;
                        let p1Score =  document.getElementById("p1-points");
                        p1Score.innerHTML = p1Points;

                    }else{
                        pt.innerHTML = "Player 2 has WON the Game";
                        pt.style.transform = 'scale(1.05)';
                        pt.style.transition = 'transform 1.5s';
                        ps.style.display = "none";
                        p2Points += 1;
                        let p2Score =  document.getElementById("p2-points");
                        p2Score.innerHTML = p2Points;
                    }
                    playAgain.style.display = "flex";
                    chance = 9;
                }

                else if(chance == 8){
                    pt.innerHTML = "It's a DRAW";
                    pt.style.transform = 'scale(1.05)';
                    pt.style.transition = 'transform 1.5s';
                    ps.style.display = "none";
                    playAgain.style.display = "flex";
                }
            }
            chance += 1;
        }
    }
}

function restart(){
    chance = 0;

    for(i = 0; i <= 8; i++){
        let div = document.getElementById(i);
        div.innerHTML = "";
        div.style.transform = 'scale(1)';
        div.style.backgroundColor = 'rgba(165, 42, 42, 0.4)';
    }

    pt.innerHTML = "Player 1 needs to Play";
    ps.style.display = "flex";
    ps.innerHTML = "You are X";
    playAgain.style.display = "none";
}
