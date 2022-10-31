const {pool} = require('../db.js');

class post {
    //this grabs all the engineers accounts 
    static getAllPostFromDB() {
        return pool.query('SELECT * FROM post INNER JOIN engineers ON engineers.id = post.userid ORDER by created_at DESC;');
    }
    //this grabs one engineers account based on id 
    static getPostByIdFromDB(id) {
        return pool.query('SELECT * FROM post WHERE userid = $1 ORDER by created_at DESC;',[id]);
    }
    static getPostByusernameFromDB(username) {
        return pool.query('SELECT * FROM post INNER JOIN engineers ON engineers.id = post.userid and username = $1 ORDER by created_at DESC;',[username]);
    }
    //this inserts data given adout the engineer to make a account
    static postAPostToDB(userId,description, tech1, tech2, title, url) {
            return pool.query(
            'INSERT INTO post(userid,description,tech1,tech2,title,url) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',[userId,description, tech1, tech2, title, url]);
    }

}


module.exports = post;