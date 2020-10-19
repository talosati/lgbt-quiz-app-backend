import express from 'express';
import bodyParser from 'body-parser';
import UserController from '../controllers/UserController.js';

const router = express.Router();
const jsonParser = bodyParser.json();
const userController = new UserController();

router.use(express.json());

router.get('/', (req, res) => { userController.getAll(req, res)});
router.get('/admins', (req, res) => { userController.getAdmins(req, res)});
router.get('/moderators', (req, res) => { userController.getModerators(req, res)});
router.get('/players', (req, res) => { userController.getPlayers(req, res)});

router.post('/register', jsonParser, (req, res) => { userController.register(req, res)});
router.post('/login', jsonParser, (req, res) => { userController.login(req, res)});

// router.put('/:id', userController.put);

router.delete('/:id', userController.delete);

export default router;
