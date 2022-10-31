const {pool} = require('../db.js');
//here we grab the engineer class from engineerModel.js connecting the two 
const Engineer = require('../models/engineerModel.js');
//grabs the web token creators(module)
const jwt = require('jsonwebtoken');
const engineer = require('../models/engineerModel.js');
require("dotenv").config()
const bcrypt = require("bcrypt")


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
// async function generateToken (engineer) {
//     const secret = `${process.env.SECRET}`;
//     const token = await jwt.sign(
//         {
//             "userId": engineer["userId"],   
//         },
//         secret,
//         {
//             expiresIn: '365d'
//         }
//     );
//     console.log(`Token: ${token}`);

//     return token;
// }
// generateToken({"userId": "cece1232"})

//  try{
//      generateToken({"userId": "cece1232"})
//   }catch(error){
//     console.log(error.message)
//   }


const addEngineer = async (request, response) => {
    
    const {name, username, email, password} = request.body;

    // console.log(password)
    // let hashedPassword = async (password, saltRounds = 10) => {
    //     try {
    //       // Generate a salt
    //       const salt = await bcrypt.genSalt(saltRounds)
      
    //       // Hash password
    //       return await bcrypt.hash(password, salt)
    //     } catch (error) {
    //       console.log(error)
    //     }
      
    //     // Return null if error
    //     return null
    //   }

    // let hashedPassword;
    // const saltRounds = 10;
    // try {
    //     hashedPassword = await bcrypt.hash(password, saltRounds);

    //   } catch (err) {
    //     return res.status(401).json({
    //       message: "Invalid password",
    //       error: err.message
    //     })
    //   }
    
    const postEngineer = await Engineer.postEngineerToDB(name, username, email, password);

    const insertedEngineer = postEngineer.rows[0];
    response.send(insertedEngineer);
}


module.exports = {
    getEngineer,
    getSingleEngineer,
    addEngineer
}