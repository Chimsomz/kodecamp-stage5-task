const express = require('express');
const router = express.Router();
//const schema = require('./schema');
//import schema

//get route
router.get ("/", async(req, res) =>{

    try { 
        const data = await schema.find();
     res.json(data);
   }
   catch (err) {
console.log('error ${err}');
   }
});

// post route
router.post("/", async (req, res) => {

   try {
      const data = await schema.create(req.body);
       res.json(data);
  }
    catch (err) {
    console.log('error: ${err}');
   }
});

module.exports = router;