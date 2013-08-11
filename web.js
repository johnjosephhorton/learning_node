
// express is a node module for web servers 
var express = require('express')
var app = express() // creating in instance 

var urls = ["oDesk","Elance", "TaskRabbit", "Uber", "Freelancer", "Exec"]

// Gets the list of companies to evaluate 
app.get('/api/get_companies', function(request, response){
    response.send(urls)
})

// exposes all the files 
app.use(express.static(__dirname))

// app.get('/api/process_text/:text', function(request, response) {
//     var receivedText = request.params.text
//     console.log('Text:' + request.params.text)
//     console.log("button pushed")
//     response.send(receivedText.toUpperCase())
//     })

app.listen(5000, function() {
	console.log("go to " + 5000) // write to console if connected on port 5000
})

