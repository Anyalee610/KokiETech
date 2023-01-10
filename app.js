const {pool} = require('./db.js');
const express = require('express');
const engineerRouter = require('./routes/engineerRoutes');
const postRouter = require('./routes/postRoute');
// const bcrypt = require("bcrypt")

const app = express();
const cors = require('cors');
const port = 4007; 
app.use(cors());
app.use(express.json());


//connects the api to the routes that connect to everything else
app.use('/engineer', engineerRouter);
app.use('/feeds',postRouter)
//when you try to log in it will see if matches the data base 
app.get("/engineer-login/:name/:password", async (request, rep) => {
    const username = request.params.name;
    const userPassword = request.params.password;
   
   
    let data = await pool.query('SELECT * FROM engineers WHERE username = $1 AND password = $2',[username,userPassword]);
   
    if (data.rows[0]) {
        let password = await pool.query("SELECT password FROM engineers WHERE username = $1", [username])
        
        if (password.rows[0].password === userPassword) {
            
            rep.send({ alert: "loged in",data: data.rows[0] })
        } else {
            rep.send({ alert:'invalid log in 1'})
        }
    } else {
        rep.send({ alert: "invalid log in"})
    }
})


app.listen(port, () => {
    console.log(`listening at port: ${port}`);
})

