// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!
const link = 'https://swapi.dev/api/people/1/'


const req = new XMLHttpRequest();

req.onload = function () {
  console.log('It loaded')
  const data = JSON.parse(this.responseText)
  console.log(data.name, data.height);
}

req.onerror = function () {
  console.log('ERROR')
  console.log(this)
}

req.open('GET', link)
req.send()