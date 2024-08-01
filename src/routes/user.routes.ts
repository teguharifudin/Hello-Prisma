import { Router } from 'express';
import { register, login, getUser, updateRole, getUsers, removeUser } from '../controllers/user.controllers';
import { authenticateJWT } from '../middleware/auth.middleware';
import { authorizeRole } from '../middleware/role.middleware';
import { Role } from '../interfaces/user.interfaces';
import { validateRegister, validateLogin, validateUpdateRole } from '../validations/user.validations';

const router = Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

router.get('/users', authenticateJWT, getUsers);
router.get('/users/:id', authenticateJWT, getUser);

router.put('/users/:id/role', authenticateJWT, authorizeRole(Role.ADMIN), updateRole);
router.delete('/users/:id', authenticateJWT, authorizeRole(Role.ADMIN), removeUser);

export default router;