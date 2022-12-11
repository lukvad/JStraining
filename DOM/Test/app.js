const cont = document.querySelector('#container')

for (let i = 1; i <= 100; i++) {
    const button = document.createElement('button')
    button.textContent = 'Hey!'
    cont.appendChild(button)
}