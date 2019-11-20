const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const express = require('express')

const app = express()
const port = 3000

let pins = {
	0: new Gpio(17, 'out'),
	1: new Gpio(27, 'out')
}


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/pin/:id', function (req, res) {
	const pin = pins[req.params.id];
	const status = pin.readSync();
	res.send(JSON.stringify({status: status}));
})

app.post('/pin/:id', function (req, res) {
	const pin = pins[req.params.id];
	pin.writeSync(parseInt(req.query.value));
	const status = pin.readSync();
	res.send(JSON.stringify({status: status}));
})








app.listen(port, () => console.log(`Example app listening on port ${port}!`))
