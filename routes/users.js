const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/User');
const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/users', async (req,res) => {
    try{
        res.send("You will soon get all the users");
    } catch (error) {
        res.status(500).send("Sorry there was and error : ", error);
    }
});

router.post('/users', async (req,res) => {

    try{
        console.log(req.body.username, ' ' , req.body.password)
    } catch (error) {
        res.status(404).send("Sorry ... there was a problem ", error)
    }
})

module.exports = router;
