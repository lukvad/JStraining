// document.querySelector('button').addEventListener('click', function (evt) {
//     console.log(evt)
// })

// input.addEventListener('keydown', function (evt) {
//     console.log(evt.key)
//     console.log(evt.code)
// })


// window.addEventListener('keydown', function (evt) {
//     switch (evt.code) {
//         case 'ArrowUp':
//             console.log('UP!')
//             break;
//         case 'ArrowDown':
//             console.log('DOWN!')
//             break;
//         default: 
//             console.log('IGNORED!')
//     }
// })


const form = document.querySelector('#shelterForm')
const input = document.querySelector('#catName ')
const list = document.querySelector('#cats')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const catName = input.value
    newLi = document.createElement('li')
    newLi.innerText = catName
    list.append(newLi)
    input.value = ''
})