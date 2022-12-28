const jokes = document.querySelector('#jokes')
const btn = document.querySelector('button')
const addDadJoke = async () => {
  const joke = await getDadJoke()
  const newLi = document.createElement('LI')
  newLi.innerText = joke
  jokes.append(newLi)
}
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com', config)
    return res.data.joke
  } catch (e) {
    return 'Sorry no jokes atm'
  }
}

btn.addEventListener('click', addDadJoke)


// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//     console.log(res.data.name, res.data.height);
//   } catch (e) {
//     console.log(e);
//   }
// }
// getStarWarsPerson(5)
// getStarWarsPerson(10)


// // axios
// //   .get("https://swapi.dev/api/people/1/")
// //   .then((res) => {
// //     console.log("RESPONSE: ", res);
// //   })
// //   .catch((e) => {
// //     console.log("ERROR! ", e);
// //   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);
