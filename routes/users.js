import express from 'express';

const router = express.Router();

const users = [
    {
        name:"sagar",
        age:19
    },
    {
        name:"kunte",
        age:18
    }
];
// {Here if we  write '/users' then it will start from /users only so make it / }
router.get('/', (req,res) => {
    console.log(users);
    res.send(users);

});

router.post('/',(req,res) => {
    console.log('POST route reached');
    // console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(`user name is ${user.name} and age ${user.age} added to the DataBase`);
})
export default router;