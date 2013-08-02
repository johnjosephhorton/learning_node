
// express is a node module for web servers 
var express = require('express')
var app = express() // creating in instance 

// exposes all the files 
app.use(express.static(__dirname))

app.get('/api/record_button', function(request, response) {
    // request is an object coming from the client 
    // 
    console.log("button pushed") 
    response.send("OK") 
    })

app.listen(5000, function() {
        var x = 100; 
	console.log("go to " + 5000) // write to console if connected on port 5000
})

