var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views';

//Route Config
app.use("/", router);
//Route Config Ends
app.use(express.static('assests'));
router.get("/", function (req, res) {
    res.sendFile(path + "/index.html");
});
app.listen(3003, function () {
    console.log("Live at Port 3003");
});