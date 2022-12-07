




// function greet(person, msg = 'Hey there!') {
//     console.log(`${msg} ${person}`)
// }



////DAFAULT ARGUMENT VALUE!!!
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }



// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             console.log(this.fullName())
//         }, 3000)
//     }
// }



// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
// ]

// const highestRated = movies.reduce((bestMovie, curMovie) => {
//     if (curMovie.score > bestMovie.score) {
//         return curMovie;
//     } return bestMovie;
// })
//ADDITIONAL ARGUMENT!!!
// const prices = [9.99, 9.99, 19.99, 12.99, 213.99, 93.99, 49.99]
// const minPrice = prices.reduce((a, num) => a + num, 100)



// const prices = [9.99, 9.99, 19.99, 12.99, 213.99, 93.99, 49.99]
// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })



//TEST HARD !!!
// function allEvens(arr) {
//     return arr.every(a => a % 2 === 0)
// }



// // SOME!!! ANY MOVIE AFTER 2000 !!!
// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
// ]

// console.log(
//     movies.some(m => m.year >= 2000)
// )





//EVERY !!!
// const exams = [80, 90, 72, 87, 66]

// console.log(exams.every(score => score >= 75))




//TEST
// function validUserNames(usernames) {
//     // your code here
//     return usernames.filter(val => val.length < 10)
// }




// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
// ]


// const goodTitlesFaster = movies
//     .filter(m => m.score > 80)
//     .map(m => m.title)


// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => (m.title))
// const badMovies = movies.filter(m => m.score < 70)
// const recentMovies = movies.filter(m => m.year > 2000)


// console.log('Hello');
// setTimeout(() => {
//     console.log("...are you still there?")
// }, 3000);


// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)
// // clearInterval(1)


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 72
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 80
//     },
//     {
//         title: 'Alien',
//         score: 77
//     }
// ]

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))





//SINGLE EXPRESSION !!!
// const rollDie = () => Math.floor(Math.random() * 6) + 1



// // DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// // Write your code here
// const firstNames = fullNames.map(function (full) {
//     return full.first;
// })




// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 72
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 80
//     },
//     {
//         title: 'Alien',
//         score: 77
//     }
// ]


// const titles = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })



// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 72
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 80
//     },
//     {
//         title: 'Alien',
//         score: 77
//     }
// ]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}`)
// })





// const square = {
//     area(side) {
//         return side ** 2;
//     },
//     perimeter(side) {
//         return 4 * side;
//     }
// };

// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

// function returnDay(num) {
//     num--;
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     const ret = days[num];
//     if (ret !== undefined) {
//         return ret;
//     } else return null;
// }




// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }