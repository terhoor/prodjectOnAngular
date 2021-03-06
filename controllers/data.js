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
        if (user.group === nameGroup.name) {
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

module.exports.createUser = async function(req, res) {
  try {
    let newDb = db;
    let user = req.body;

    const arrayUsers = [...db.students, ...db.teachers];
    let maxId = arrayUsers.reduce((id, elem) => {
      if (elem.id > id) {
        return elem.id;
      }
      return id;
    }, 0);
    
    user.id = ++maxId;

    if (user.roles[0] === "Student") {
      newDb['students'].push(user);
    } else if (user.roles[0] === "Teacher") {
      newDb['teachers'].push(user);
    }

    const dataW = JSON.stringify(newDb);

    fs.writeFile('shared/db.json', dataW, function(error){
      if(error) throw error; // если возникла ошибка
      console.log("Асинхронная запись файла завершена. Содержимое файла:");
  });
    
    
    res.status(200).json(user);
  } catch(e) {
    errorHandler(res, e);
  }
}


module.exports.changeUser = async function(req, res) {
  try {
    let newDb = db;
    
    let user = req.body;
    let nameRole = user.roles[0].toLowerCase() + 's';
    

    newDb['teachers'].forEach((userF, i) => {
      if (+userF.id === +user.id) {
        console.log('нашёл');
        newDb['teachers'].splice(i, 1);
      };
    })

    newDb['students'].forEach((userF, i) => {
      if (+userF.id === +user.id) {
        console.log('нашёл');
        newDb['students'].splice(i, 1);
      };
    })

    newDb[nameRole].push(user);

    const dataW = JSON.stringify(newDb);
    // запись в файл
    fs.writeFile('shared/db.json', dataW, function(error){
      if(error) throw error; // если возникла ошибка
      console.log("Асинхронная запись файла завершена. Содержимое файла:");
    });
    
    
    res.status(200).json();
  } catch(e) {
    errorHandler(res, e);
  }
}


module.exports.deleteUser = async function(req, res) {
  try {
    let newDb = db;
    const id = req.params.id;
    let userFind;
    let allUsers = [...newDb['teachers'], ...newDb['students']];
    allUsers.find((user) => {
      if (+user.id === +id) {
        userFind = user.roles[0];
        return true;
      }
      return false;
    })

    let nameRole = userFind.toLowerCase() + 's';
    newDb[nameRole].forEach((user, idx) => {
      if (user.id === +id) {
        newDb[nameRole].splice(idx, 1);
      }
    });

    const dataW = JSON.stringify(newDb);


    fs.writeFile('shared/db.json', dataW, function(error){
      if(error) throw error; // если возникла ошибка
      console.log("Асинхронная запись файла завершена. Содержимое файла:");
    });
    
    
    res.status(200).json("sss");
  } catch(e) {
    errorHandler(res, e);
  }
}