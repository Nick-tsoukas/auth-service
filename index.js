const express = require('express');
const port = 8000 || process.env.PORT
const app = express();
const cors = require('cors')
const router = express.Router();

// routes
const users = require('./routes/users');

app.use(cors());
app.use(users);

app.get('/', (req, res) => {
    try {
        res.send('Welcome to the home page')
    } catch (error) {
        res.status(500).send("Sorry ... there was and error: " , error );
    }
})
app.listen(8000, () => {
    console.log('now listening on port: ', port)
})