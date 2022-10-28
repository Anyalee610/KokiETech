const {pool} = require('../db.js');

class post {
    //this grabs all the engineers accounts 
    static getAllPostFromDB() {
        return pool.query('SELECT * FROM post');
    }
    //this grabs one engineers account based on id 
    static getPostByIdFromDB(id) {
        return pool.query('SELECT * FROM post WHERE userId = $1',[id]);
    }
    //this inserts data given adout the engineer to make a account
    static postAPostToDB(description, tech1, tech2, title, url) {
            return pool.query(
            'INSERT INTO post(description,tech1,tech2,title,url) VALUES($1, $2, $3, $4, $5,$6) RETURNING *',[description, tech1, tech2, title, url]);
    }

}


module.exports = post;