import express from 'express';
import { v4 as uuidv4} from 'uuid';
// This uuid is used to give each object or value with a unique id 
const router = express.Router();

let users = [];
// {Here if we  write '/users' then it will start from /users only so make it / }
router.get('/', (req,res) => {
    console.log(users);
    res.send(users);
});

router.post('/',(req,res) => {
    console.log('POST route reached');
    // console.log(req.body);
    const user = req.body;
    const userWithID = {...user,id:uuidv4()};
    users.push(userWithID);
    res.send(`user name is ${user.name} and age ${user.age} added to the DataBase`);
})
// This method is used to delete the details based on id given as parameter while delete request
router.delete('/:id',(req,res) => {
    let {id} = req.params;
    users = users.filter((user) => user.id!=id);
    res.send(`User with the id ${id} is deleted from the DataBase`);
})

// This method is used to patch means update the user data with the given id
router.patch('/:id',(req,res) => {
    let {id} = req.params;
    let user = users.find((user) => user.id==id);
    let {name,age} = req.body;
    if(name) {
        user.name = name;
    }
    if(age) {
        user.age = age;
    }
    console.log(`User data with id ${id} updated successfully!`);
    res.send(`User data with id ${id} updated successfully!`);
})

// Please watch here we have used column i.e :
router.get('/:id',(req,res) => {
   const {id} = req.params;
   const foundUser = users.find((user) => user.id===id)
   res.send(foundUser);
})
export default router;