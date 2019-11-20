const express = require('express')
const app = express()
const port = 3000

let pins = {
	0: 0,
	1: 0
};


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/pin/:id', function (req, res) {
  res.send(JSON.stringify({status: pins[req.params.id]}));
})

app.post('/pin/:id', function (req, res) {
	pins[req.params.id] = parseInt(req.query.value);
	res.send(JSON.stringify({status: pins[req.params.id]}));
})








app.listen(port, () => console.log(`Example app listening on port ${port}!`))
