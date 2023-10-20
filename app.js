const express = require('express');
const path = require('path');
const app = express();

// there are files: styles.css, logo.svg, browser-app.js in this folder
app.use(express.static('./public'))

// app.get('/', (req,res) =>{
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html')); // here resolve = join
// })

app.all('*',(req,res) =>{
  res.status(404).send('Resource not found')
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000...");
});
