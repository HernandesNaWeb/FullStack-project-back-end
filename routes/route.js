import express from 'express';
import { createUser, getAll, getOne, getByName, alterUsers, deleteUsers} from '../repositories/UserRepositorie.js'
import { authenticate } from '../middleware/Authenticate.js';

const router = express.Router();

router.route("/cadastro").post(createUser);
router.route("/usuario").get(getAll,authenticate); 
router.route("/usuario/nome/:name").get(getByName);
router.route("/usuario/:id").get(getOne, authenticate).put(alterUsers).delete(deleteUsers);

 
export default router;