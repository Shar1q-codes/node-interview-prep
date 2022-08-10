//Default export
function send (req,res){
    res.send("Send page")
}

module.exports = send


//Named export
function test (req,res){
    res.send("test page")
}

module.exports = {test}