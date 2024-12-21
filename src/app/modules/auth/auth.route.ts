import { Router } from 'express';
import { UserController } from '../user/user.controller';
import { AuthControllers } from './auth.controller';

const router = Router();

router.post('/register', UserController.register);
router.get('/login', AuthControllers.loginUser);

export const AuthRoute = router;
