const {pool} = require('../db.js');
//here we grab the post class from postModel.js connecting the two 
const post = require('../models/postModel.js');

//This function waits for the informaton about all the post to come from the db.js to postModel.js to get here. Then sends a response.
const getAllPost = async (request, response) => {
    const allPost = await post.getAllPostFromDB();
    response.send(allPost.rows); 
};

//This function waits for the informaton about posts from one engineer to come from the db.js to postModel.js to get here. Then sends a response.
const getSingleEngineersPost = async (request, response) => {
    const id = request.params.id;
    const postById = await post.getPostByIdFromDB(id);
    response.send(postById.rows);
}
const getEngineersPost = async (request, response) => {
    const usernames = request.params.username;
    const engineerPost = await post.getPostByusernameFromDB(usernames);
    response.send(engineerPost.rows);
}
//This function get a request with userId, description, tech1, tech2, title, url. It then wait for the promise to be fullied that it sent it to the db.js. Then sends the data that was put.
const addPost = async (request, response) => {
    const {userId, description, tech1, tech2, title, url} = request.body;
    const postByEngineer = await post.postAPostToDB(userId,description, tech1, tech2, title, url);
    const insertedPost = postByEngineer.rows[0];
    response.send(insertedPost);
}


module.exports = {
    addPost,
    getSingleEngineersPost,
    getAllPost,
    getEngineersPost
}