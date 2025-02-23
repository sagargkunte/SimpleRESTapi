import express from 'express';

import { createUser , getUsers , deleteUser , getUser , patchUser} from '../controller/users.js';
//* This uuid is used to give each object or value with a unique id 
const router = express.Router();

//* {Here if we  write '/users' then it will start from /users only so make it / }
router.get('/',getUsers);

//* See here carefully i have implemented the createUser function in controller folder
router.post('/',createUser);

//* This method is used to delete the details based on id given as parameter while delete request
router.delete('/:id',deleteUser);

//* This method is used to patch means update the user data with the given id
router.patch('/:id',patchUser);

//* Please watch here we have used column i.e :
router.get('/:id',getUser);

export default router;