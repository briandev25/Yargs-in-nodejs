const fs = require('fs');

// const book = {
//     title:"Ego is the enemy",
//     author:"Tom Holland"
// }

// const bookJSON  = JSON.stringify(book);

// fs.writeFileSync('json.json',bookJSON);

const dataBuffer = fs.readFileSync('json.json');
const dataJSON =dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name ="Waweru";
data.age="34";

console.log(data)

const userJSON = JSON.stringify(data)
const finalJSON = fs.writeFileSync('json.json',userJSON);