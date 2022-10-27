const express = require('express');
const engineerRouter = require('./routes/engineerRoutes');
const app = express();
const cors = require('cors');
const port = 3001; 
app.use(cors());
app.use(express.json());


//connects the api to the routes that connect to everything else
app.use('/engineer', engineerRouter);

app.listen(port, () => {
    console.log(`listening at port: ${port}`);
})

