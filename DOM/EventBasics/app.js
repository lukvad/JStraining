const randomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('button')

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1')

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor()
    this.style.color = randomColor()
}
// const h1 = document.querySelector('h1')
// button.addEventListener('click', () => {
//     const newColor = randomColor()
//     h1.innerText = newColor
//     document.body.style.backgroundColor = newColor
// })



// const btn = document.querySelector('#v2');

// btn.onclick = function () {
//     console.log("YOU CLICKED ME!")
//     console.log("I HOPE IT WORKED!!")
// }

// function scream() {
//     console.log("AAAAAHHHHH");
//     console.log("STOP TOUCHING ME!")
// }
// function twist() {
//     console.log("TWIST")
// }

// btn.onmouseenter = scream;


// document.querySelector('h1').onclick = () => {
//     alert('you clicked the h1!')
// }


// const btn3 = document.querySelector('#v3')
// btn3.addEventListener('mouseup', function () {
//     alert('clicked! ')
// })

// const btnTwist = document.querySelector('#tas')
// btnTwist.addEventListener('click', twist)
// btnTwist.addEventListener('click', scream, { once: true })




// const btnH = document.querySelector('#hello')
// const btnG = document.querySelector('#goodbye')

// btnH.addEventListener('click', () => {
//     console.log('hello')
// })

// btnH.addEventListener('click', () => {
//     console.log('goodbye')
// })