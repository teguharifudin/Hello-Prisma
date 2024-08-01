import { Router } from 'express';
import { create, update, getAll, getById, remove, getByManager } from '../controllers/event.controllers';
import { authenticateJWT } from '../middleware/auth.middleware';
import { authorizeRole } from '../middleware/role.middleware';
import { Role } from '../interfaces/user.interfaces';
import { validateEvent } from '../validations/event.validations';

const router = Router();

router.get('/events', getAll);
router.get('/events/:id', getById);

router.post('/events', authenticateJWT, authorizeRole(Role.MANAGER), validateEvent, create);
router.put('/events/:id', authenticateJWT, authorizeRole(Role.MANAGER), validateEvent, update);
router.delete('/events/:id', authenticateJWT, authorizeRole(Role.MANAGER), remove);
router.get('/events/manager/:managerId', authenticateJWT, authorizeRole(Role.MANAGER), getByManager);

export default router;