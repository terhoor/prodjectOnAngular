const errorHandler = require('../utils/errorHandler');
const db = require('../shared/db.json');
const fs = require('fs');

module.exports.getData = function(req, res) {
  try {
      res.status(200).json(db);
  } catch(e) {
      errorHandler(res, e);
  }
};

module.exports.getUserId = async function(req, res) {
  try {
    const id = req.params.id;
    const user = await function() {
      const arrayUsers = [...db.students, ...db.teachers];
      return arrayUsers.find((user) => {
        if (user.id.toString() === id) {
          return true;
        }
        return false;
      })
    }();

    res.status(200).json(user);
  } catch(e) {
    errorHandler(res, e);
  }
}

module.exports.getByGroupName = async function(req, res) {
  try {
    const nameGroup = req.body;
    const groupArr = await function() {
      const arrayUsers = [...db.students];
      return arrayUsers.filter((user) => {
        if (user.groups === nameGroup.name) {
          return true;
        }
        return false;
      })
    }();
    res.status(200).json(groupArr);
  } catch(e) {
    errorHandler(res, e);
  }
}
