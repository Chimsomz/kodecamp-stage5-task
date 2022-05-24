const express = require('express');
const req = require('express/lib/request');
//const conn = require ('./mongoose');

const routes = require('./router/routes')

const app = express();

app.get('/', (req, res) => {
    res.send(' hello kodecamp beginners');
})
app.use(express.json());
//use middleware
app.use('/', routes);

//listen and create port
const port = 3000

app.listen(3000,()=>{
    console.log("this App is running on port 3000")
});
