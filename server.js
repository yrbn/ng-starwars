const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

console.log('Directory name:', __dirname)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/ping', (req, res) => {
  res.send('pong');
  res.end();
});

app.post('/pong', function(req, res){
  res.send('ping');

});

app.get("/*", function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});
  
app.listen(8080, function (err) {
  if (err) console.error(err);
  else console.log(`Running server at port 8080!`)
});






