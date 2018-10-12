let db = require('../../../dbmanager/mysql/db')

let MappingDataProvider = {

  createUser: function(userData){
      let query = "INSERT INTO users (first_name, last_name, designation, email_id, dob, active) VALUES  (?, ?, ?, ?, ?, ?);";
      return db.querySql(query, [userData.firstName, userData.lastName, userData.designation, userData.emailID, userData.dob, userData.active]);
  },
  showUsers: function(){
      let query = "SELECT user_id, first_name, last_name, designation, email_id, dob, active FROM users; ";
      return db.querySql(query);
  },
  getUserByID: function(userId){
      let query = "SELECT user_id, first_name, last_name, designation, email_id, dob, active FROM users WHERE user_id = ?;";
      return db.querySql(query, userId);
  },
  deleteUser: function(userId){
      let query = "DELETE FROM users WHERE user_id = ?;";
      return db.querySql(query, userId);
  }
};

module.exports = MappingDataProvider
