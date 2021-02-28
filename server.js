const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './src/index.html'));
})


const PORT = 8081;
app.listen(PORT, () => {
	console.log(`App running on ${PORT}`);
})