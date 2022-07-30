
const fillSquare = (() => {
    
    let round = 1;
    document.getElementById("roundcount").innerHTML = "Round: " + round;
    const squares = document.querySelectorAll('.square');
    let playeronescore = 0;
    let playertwoscore = 0;
    let playerone = prompt("Enter first player's name.");
    if (playerone == '') {
        document.getElementById("playeronename").innerHTML = "Player 1";
    }else {
        document.getElementById("playeronename").innerHTML = playerone;
    }
    
    
   
    let playertwo = prompt("Enter second player's name.");
    if (playertwo == '') {
        document.getElementById('playertwoname').innerHTML = "Player 2";
    }else {
        document.getElementById("playertwoname").innerHTML = playertwo;
    }
    
    function takeTurns() {
        let turn = 1;
        squares.forEach(square => {
    square.addEventListener('click', function () {
        if (turn % 2 == 0) {
        square.innerHTML = "O";
        turn++;
        checkWin();
        }else {
            square.innerHTML = "X";
            turn++;
            return checkWin();
        }
    }, {once: true});
});
}
takeTurns();
function checkWin() {
    const s1 = document.getElementById("one");
    const s2 = document.getElementById("two");
    const s3 = document.getElementById("three");
    const s4 = document.getElementById("four");
    const s5 = document.getElementById("five");
    const s6 = document.getElementById("six");
    const s7 = document.getElementById("seven");
    const s8 = document.getElementById("eight");
    const s9 = document.getElementById("nine");


    if((s1.innerHTML == "X") && (s2.innerHTML == "X") && (s3.innerHTML == "X") || 
    (s4.innerHTML == "X") && (s5.innerHTML == "X") && (s6.innerHTML == "X") ||
    (s7.innerHTML == "X") && (s8.innerHTML == "X") && (s9.innerHTML == "X") ||
    (s1.innerHTML == "X") && (s4.innerHTML == "X") && (s7.innerHTML == "X") ||
    (s2.innerHTML == "X") && (s5.innerHTML == "X") && (s8.innerHTML == "X") ||
    (s3.innerHTML == "X") && (s6.innerHTML == "X") && (s9.innerHTML == "X") ||
    (s1.innerHTML == "X") && (s5.innerHTML == "X") && (s9.innerHTML == "X") ||
    (s3.innerHTML == "X") && (s5.innerHTML == "X") && (s7.innerHTML == "X"))  {
        alert("X wins!");
        playeronescore++;
        document.getElementById("playeronescore").innerHTML = playeronescore;
        takeTurns();
        round++;
        document.getElementById("roundcount").innerHTML = "Round: " + round;
        squares.forEach(square => {
            square.innerHTML = ''
        });
    } else if((s1.innerHTML == "O") && (s2.innerHTML == "O") && (s3.innerHTML == "O") ||
    (s4.innerHTML == "O") && (s5.innerHTML == "O") && (s6.innerHTML == "O") ||
    (s7.innerHTML == "O") && (s8.innerHTML == "O") && (s9.innerHTML == "O") ||
    (s1.innerHTML == "O") && (s4.innerHTML == "O") && (s7.innerHTML == "O") ||
    (s2.innerHTML == "O") && (s5.innerHTML == "O") && (s8.innerHTML == "O") ||
    (s3.innerHTML == "O") && (s6.innerHTML == "O") && (s9.innerHTML == "O") ||
    (s1.innerHTML == "O") && (s5.innerHTML == "O") && (s9.innerHTML == "O") ||
    (s3.innerHTML == "O") && (s5.innerHTML == "O") && (s7.innerHTML == "O")) {
        alert("O wins!");
        playertwoscore++;
        document.getElementById("playertwoscore").innerHTML = playertwoscore;
        round++;
        document.getElementById("roundcount").innerHTML = "Round: " + round;
        takeTurns();
        squares.forEach(square => {
            square.innerHTML = ''
        });
    } else if (s1.innerHTML.trim() != ''  
    && s2.innerHTML.trim() != '' 
    && s3.innerHTML.trim() != '' 
    && s4.innerHTML.trim() != '' 
    && s5.innerHTML.trim() != '' 
    && s6.innerHTML.trim() != '' 
    && s7.innerHTML.trim() != '' 
    && s8.innerHTML.trim() != ''
    ) { 
        alert("Draw!");
        round++;
        document.getElementById("roundcount").innerHTML = "Round: " + round;
        takeTurns();
        squares.forEach(square => {
            square.innerHTML = ''
        });
    }
}
})();