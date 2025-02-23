import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

//* This is going to tell that we are using json data throught the project 
app.use(bodyParser.json());

app.use('/users',userRoutes);

app.get('/',(req,res) => {
    console.log('TEST');
    res.send('Hello form home page');
})
app.listen(PORT,() => console.log('Server is Running in http://localhost:'+PORT));
//* nodemon is a development tool helps to restart server again and again