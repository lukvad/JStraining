const h1 = document.querySelector('h1')
const input = document.querySelector('input')

input.addEventListener('input', function (e) {
    h1.innerText = `Welcome, ${input.value}`
})