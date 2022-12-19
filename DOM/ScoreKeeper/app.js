const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score')
}

const resetButton = document.querySelector('#reset')
const playTo = document.querySelector('#playTo')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})
resetButton.addEventListener('click', reset)

playTo.addEventListener('change', function () {
    winningScore = parseInt(playTo.value)
    reset()
})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}

function reset() {
    isGameOver = false
    p1.score = 0
    p2.score = 0
    p1.display.textContent = 0
    p2.display.textContent = 0
    p1.display.classList.remove('has-text-danger', 'has-text-success')
    p2.display.classList.remove('has-text-danger', 'has-text-success')
    p1.button.disabled = false
    p2.button.disabled = false
}