
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("ci/cd setup working");
}

module.exports = print;