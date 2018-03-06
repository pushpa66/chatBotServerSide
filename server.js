var express = require('express');
var app = express();

app.listen(80, function() {
    console.log('Chatfuel Bot-Server listening on port 80...');
});

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ name: "pushpa kumara" }));
});
// var express = require("express");
// var router = express.Router();
//
// router.get("/", function(req, res, next) {
//     var jsonData = {"name": "Pushpa Kumara"};
//     res.json(jsonData);
// });
//
// module.exports = router;