
let express = require('express');
let app = express();
let parser = require('body-parser');
let router = express.Router();
let http = require('http');
//var mysql = require("mysql");

global.env = process.env.NODE_ENV || 'local';
app.set('port', process.env.PORT || 8081);

let mysql = require('./dbmanager/mysql/connection.js');
mysql.setup();

app.use(parser.json());

app.use(router);
require('./router.js')(router);

var server = http.createServer(app)
  .on('error', function(err) {
    util.log(err);
    process.exit(1);
  })
  .listen(app.get('port'), function() {
    console.log('Effy Server listening on port ' + app.get('port') + ' in ' + (process.env.NODE_ENV || 'local'));
});
