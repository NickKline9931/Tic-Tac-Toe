const fillSquare = (() => {
const squares = document.querySelectorAll('.square');
let turn = 1;
squares.forEach(square => {
    square.addEventListener('click', function () {
        if (turn % 2 == 0) {
        square.innerHTML = "O";
        turn++;
        }else {
            square.innerHTML = "X";
            turn++;
        }
    }, {once: true});
});
})();