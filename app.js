const {pool} = require('./db.js');
const express = require('express');
const engineerRouter = require('./routes/engineerRoutes');
//const signInRouter = require('./routes/signInRoutes');
//const signInController = require('./controller/signInController.js');
const app = express();
const cors = require('cors');
const port = 4000; 
app.use(cors());
app.use(express.json());


//connects the api to the routes that connect to everything else
app.use('/engineer', engineerRouter);
app.get("/engineer-login/:name/:password", async (request, rep) => {
    const username = request.params.name;
    const userPassword = request.params.password;
    let data = await  pool.query('SELECT * FROM engineers WHERE username = $1 and password = $2',[username,userPassword]);
    console.log(data)
    if (data.rows[0]) {
        let password = await pool.query("SELECT password FROM engineers WHERE username = $1", [username])
        console.log(password)
        if (password.rows[0].password === userPassword) {
            rep.send({ alert: "loged in",data: data.rows[0] })
        } else {
            rep.send({ alert:'invalid log in 1'})
        }
    } else {
        rep.send({ alert: "invalid log in"})
    }
})
//app.use('/engineer-login/:username/:password', signInController);


app.listen(port, () => {
    console.log(`listening at port: ${port}`);
})

