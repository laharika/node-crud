'use strict';

let Promise = require("bluebird");

function setup(){
	let mysql = require('mysql');
	Promise.promisifyAll(mysql);
	Promise.promisifyAll(require('mysql/lib/Connection').prototype);
	Promise.promisifyAll(require('mysql/lib/Pool').prototype);

  let config = require('../../config/'+global.env+'/db.config.json');
	console.log(config);

	global.pool = mysql.createPool(config);

}

function getSqlConnection() {
	//let pool = global.pool;
	return global.pool.getConnectionAsync().disposer(function (connection) {
		connection.release();
	});
}

/*function querySql(query, params) {
  return Promise.using(getSqlConnection(), function (connection) {
    if (typeof params !== 'undefined'){
      return connection.queryAsync(query, params);
    } else {
      return connection.queryAsync(query);
    }
  });
};
*/
module.exports = {
  getSqlConnection: getSqlConnection,
  setup: setup
  //querySql: querySql
};
