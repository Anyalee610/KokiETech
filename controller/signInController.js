const {pool} = require('../db.js');
//here we grab the engineer class from engineerModel.js connecting the two 
const engineerLogIn = require('../models/signInModel.js');


//This function waits for the informaton about one engineer to come from the db.js to engineerModel.js to get here. Then sends a response.
const logInEngineer = async (request, response) => {
    const username = request.params.username;
    const password = request.params.password;
    const engineer = await engineerLogIn.getAllEngineerByLoginFromDB(username,password);
    const insertedEngineer = engineer.rows[0];
    if(insertedEngineer){
        response.send(insertedEngineer);
    }else{
        response.send({alert:"invald login "});
    }
}



module.exports = {logInEngineer};