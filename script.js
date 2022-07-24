document.getElementById("container").addEventListener("click", function() {
    alert("DIE!")
});

const game = (() => {
    let gameBoard = ["X", "O", "X", "O", "O", "O", "X", "X", "X"];
    document.getElementById("one").innerHTML = gameBoard[0];
    document.getElementById("two").innerHTML = gameBoard[1]
    document.getElementById("three").innerHTML = gameBoard[2]
    document.getElementById("four").innerHTML = gameBoard[3]   
    document.getElementById("five").innerHTML = gameBoard[4]
    document.getElementById("six").innerHTML = gameBoard[5]
    document.getElementById("seven").innerHTML = gameBoard[6]
    document.getElementById("eight").innerHTML = gameBoard[7]
    document.getElementById("nine").innerHTML = gameBoard[8]
})();