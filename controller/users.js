import { v4 as uuidv4} from 'uuid';


let users = [];

export const createUser = (req,res) => {
    console.log('POST route reached');
    // console.log(req.body);
    const user = req.body;
    users.push({...user,id:uuidv4()});
    res.send(`user name is ${user.name} and age ${user.age} added to the DataBase`);
}

export const getUsers = (req,res) => {
    console.log(users);
    res.send(users);
}

export const deleteUser = (req,res) => {
    let {id} = req.params;
    users = users.filter((user) => user.id!=id);
    res.send(`User with the id ${id} is deleted from the DataBase`);
}

export const getUser = (req,res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id===id)
    res.send(foundUser);
 }

 export const patchUser = (req,res) => {
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
 }