const express = require('express');
const app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use(express.static('public'))



app.listen(3000, () => console.log('Example app listening on port 3000!'))