const {pool} = require('../db.js');
//here we grab the engineer class from engineerModel.js connecting the two 
const Engineer = require('../models/engineerModel.js');

//This function waits for the informaton about all the enginners to come from the db.js to engineerModel.js to get here. Then sends a response.
const getEngineer = async (request, response) => {
    const allEngineer = await Engineer.getAllEngineerFromDB();
    response.send(allEngineer.rows); 
};

//This function waits for the informaton about one engineer to come from the db.js to engineerModel.js to get here. Then sends a response.
const getSingleEngineer = async (request, response) => {
    const id = request.params.id;
    const engineer = await Engineer.getEngineerFromDB(id);
    response.send(engineer.rows[0]);
}
//This function get a request with name, username, email, password. It then wait for the promise to be fullied that it sent it to the db.js. Then sends the data that was put.
const addEngineer = async (request, response) => {
    const {name, username, email, password} = request.body;
    const postEngineer = await Engineer.postEngineerToDB(name, username, email, password);
    const insertedEngineer = postEngineer.rows[0];
    response.send(insertedEngineer);
}


module.exports = {
    getEngineer,
    getSingleEngineer,
    addEngineer
}