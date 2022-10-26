const {pool} = require('../db.js');

class engineer {
    //this grabs all the engineers accounts 
    static getAllEngineerFromDB() {
        return pool.query('SELECT * FROM engineers');
    }
    //this grabs one engineers account based on id 
    static getEngineerFromDB(id) {
        return pool.query('SELECT * FROM engineers WHERE id = $1',[id]);
    }
    //this inserts data given adout the engineer to make a account
    static postEngineerToDB(name, username, email, password) {
            return pool.query(
            'INSERT INTO engineers(name,username,email,password) VALUES($1, $2, $3, $4) RETURNING *',[name, username, email, password]);
    }

}


module.exports = engineer;