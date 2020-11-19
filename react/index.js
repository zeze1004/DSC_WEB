import React from 'react'
import ReactDOM from 'react-dom'
import

const express = require('express');
const app = express();
const PORT = 1000;

app.use(express.json())

app.listen(PORT, () => {
	console.log('${PORT} sever is running');
});