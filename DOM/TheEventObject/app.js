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


// const form = document.querySelector('#shelterForm')
// const input = document.querySelector('#catName ')
// const list = document.querySelector('#cats')
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const catName = input.value
//     newLi = document.createElement('li')
//     newLi.innerText = catName
//     list.append(newLi)
//     input.value = ''
// })

const tweetContainer = document.querySelector('#tweets')
const tweetForm = document.querySelector('#tweetForm')
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = tweetForm.elements.username
    const tweet = this.elements.tweet
    addTweet(username.value, tweet.value)
    tweet.value = ''
    username.value = ''
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li')
    newTweet.append(`${username} - ${tweet}`)
    tweetContainer.append(newTweet)
}


const form = document.querySelector('form');
const list = document.querySelector('#list')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const product = this.elements.product
    const qty = this.elements.qty
    addProduct(product.value, qty.value)
    qty.value = ''
    product.value = ''
})

function addProduct(product, qty) {
    const listElement = document.createElement('li')
    listElement.append(`${product} - ${qty} pcs`)
    list.append(listElement)
}