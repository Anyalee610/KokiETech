const {pool} = require('../db.js');
//here we grab the engineer class from engineerModel.js connecting the two 
const post = require('../models/postModel.js');

//This function waits for the informaton about all the enginners to come from the db.js to engineerModel.js to get here. Then sends a response.
const getAllPost = async (request, response) => {
    const allPost = await post.getAllPostFromDB();
    response.send(allPost.rows); 
};

//This function waits for the informaton about one engineer to come from the db.js to engineerModel.js to get here. Then sends a response.
const getSingleEngineersPost = async (request, response) => {
    const id = request.params.userId;
    const postById = await post.getPostByIdFromDB(id);
    response.send(postById.rows[0]);
}
//This function get a request with name, username, email, password. It then wait for the promise to be fullied that it sent it to the db.js. Then sends the data that was put.
const addPost = async (request, response) => {
    const {userId, description, tech1, tech2, title, url} = request.body;
    const postByEngineer = await post.postAPostToDB(userId,description, tech1, tech2, title, url);
    console.log(postByEngineer)
    const insertedPost = postByEngineer.rows[0];
    response.send(insertedPost);
}


module.exports = {
    addPost,
    getSingleEngineersPost,
    getAllPost
}