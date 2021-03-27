const express = require('express');
const path = require('path');
const app = express();

app.get('/?slides=:id', (req, res) => {
	console.log(req.params.id)
})


const PORT = 8081;
app.listen(PORT, () => {
	console.log(`App running on ${PORT}`);
})