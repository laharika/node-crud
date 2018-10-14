let db = require('../../../dbmanager/mysql/db')

let MappingDataProvider = {

  createUser: function(userData){
      let query = "INSERT INTO users (first_name, last_name, designation, email_id, dob, active) VALUES  (?, ?, ?, ?, ?, ?);";
      return db.querySql(query, [userData.first_name, userData.last_name, userData.designation, userData.email_id, userData.dob, userData.active]);
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
  },
  updateUser: function(userId, userDetails){
      let cols = [];
      let values = [];
      for(var key in userDetails){
          cols.push(key);
          values.push(userDetails[key]);

      }
      values.push(userId);
      let query = "UPDATE users SET " + cols[0] + " = ?";
      for(var i = 1; i < cols.length; i++){
        query += ", " + cols[i] + " = ?";
      }
      query += " WHERE user_id = ?";
      return db.querySql(query, values);
  }
};

module.exports = MappingDataProvider
