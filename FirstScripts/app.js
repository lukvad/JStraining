

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     diedre: 81,
//     vonnie: 60
// }
// // for (let person in testScores) {
// //     console.log(`${person} scored ${testScores[person]}`);
// // }

// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }

// console.log(total / scores.length);



// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Kevin', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ];

// for (let row of seatingChart){
//     for(let student of row){
//         console.log(student);
//     }
// }


// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter the maximum number!"));
// }

// let targetNumber = Math.floor((Math.random() * maximum) + 1);
// let guess = parseInt(prompt("Enter your first guess"));
// let attempts = 1
// while (parseInt(guess) !== targetNumber) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNumber) {
//         guess = prompt("Too high! Enter new guess");
//     } else {
//         guess = prompt("Too low! Enter new guess");
//     }
// }
// if (guess === 'q') {
//     console.log("You quitter!!!")
// } else {
//     console.log(`You got it. It took ${attempts} guesses`);
// }



// let input = prompt("Say something");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("Ok you win!");


// const SECRET = "BabyHippo";
// let guess = prompt("Enter the secret code...");

// while (guess !== SECRET) {
//     guess = prompt("Enter the secret code...");
// }
// console.log("Congrats!")




// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Kevin', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW ${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }


// const animals = ['lions', 'tigers', 'bears', 'zebras', 'giraffes', 'sharks', 'dolphins'];
// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i]);
// }

// let day = parseInt(prompt("Which day"));

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("No day")
// }


// let age = prompt("Your age:");
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("INVALID AGE");
// }