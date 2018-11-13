const errorHandler = require('../utils/errorHandler')
const db = require('../shared/db.json')
const fs = require('fs')

module.exports.getData = function(req, res) {
  try {
      res.status(200).json(db)
  } catch(e) {
      errorHandler(res, e);
  }
}

/* module.exports.getTeachers = function(req, res) {
    try {
      let teachers = db['teachers']
        res.status(200).json(teachers)
    } catch(e) {
        errorHandler(res, e);
    }
}

module.exports.getStudents = function(req, res) {
  try {
    let students = db['students']
      res.status(200).json(students)
  } catch(e) {
      errorHandler(res, e);
  }
} */