let UsersDataProvider = require('../dataprovider/UsersDataProvider');
let { success, error } = require('../../../utils/ResponseWrapperUtils');

let UsersController = {
  createUser: (req, res) => {
    if(req.body.first_name == null || req.body.last_name == null || req.body.email_id == null){
      return error(res,'Mandatory fields missing.', 400, 'Mandatory fields missing.');
    }
	  return UsersDataProvider.createUser(req.body).then((output)=>{
      return success(res, output,201)
    }).catch(err=>{
      console.log('Error occured while creating user.', err);
      if(err & err.code){
        return error(res, err, err.code, err.message);
      }
      return error(res, err);
    });
	},

  showUsers: (req, res) => {
    return UsersDataProvider.showUsers().then((output)=>{
			return success(res, output)
		}).catch(err=>{
			console.log("Error occurred while fetching users.", err);
			if(err && err.code){
				return error(res, err, err.code, err.message);
			}
			return error(res, err);
		});
  },

  getUserByID: (req, res) => {
    return UsersDataProvider.getUserByID(req.params.userId).then((output)=>{
			return success(res, output)
		}).catch(err=>{
			console.log("Error occurred while fetching user: ",req.params.userId, err);
			if(err && err.code){
				return error(res, err, err.code, err.message);
			}
			return error(res, err);
		});
  },

  deleteUser: (req, res) => {
    return UsersDataProvider.deleteUser(req.params.userId).then((output)=>{
			return success(res, output)
		}).catch(err=>{
			console.log("Error occurred while fetching user: ",req.params.userId, err);
			if(err && err.code){
				return error(res, err, err.code, err.message);
			}
			return error(res, err);
		});
  },
  updateUser: (req, res) => {
    return UsersDataProvider.updateUser(req.params.userId,req.body).then((output)=>{
			return success(res, output)
		}).catch(err=>{
			console.log("Error occurred while updating user: ",req.params.userId, err);
			if(err && err.code){
				return error(res, err, err.code, err.message);
			}
			return error(res, err);
		});
  }

};

module.exports = UsersController;
