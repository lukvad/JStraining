//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"ETH","target":"USD","price":"1212.02552149","volume":"184358.68068778","change":"0.01871106"},"timestamp":1671654784,"success":true,"error":""}`

// THIS IS A JS OBJECT
const parsedData = JSON.parse(data);
JSON.stringify(data)


