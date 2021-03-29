const express = require('express');
const app = express();

app.use(express.static('./dist'))

app.get('/', (req, res) => {
  res.send('index.html');
})

app.listen(8000,() => {
  console.log(`server open: ${8000}`)
})
