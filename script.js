const game = (() => {
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('click', function () {
        square.innerHTML = "X"
    });
});
})();