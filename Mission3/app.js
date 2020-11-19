const express = require('express')
const http  = require('http')
const app = express()
const port = 1004
var httpServer = http.createServer(app)

app.get('/', (req, res) =>  {
        console.log('대충 GET이다')
        res.send('hello world!')
})
app.listen(1004, function(){
    console.log("node start")
})
// /todos 경로게 가면 dbJSON파일을 띄울 것
app.get('/todos/', (req, res) => {
	console.log('GET\t/todos/');
	res.json(dbJSON);
});


