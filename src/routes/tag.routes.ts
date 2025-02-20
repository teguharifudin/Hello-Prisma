import { Router } from 'express';
import { create, update, getAll, getById, remove } from '../controllers/tag.controllers';
import { authenticateJWT } from '../middleware/auth.middleware';
import { authorizeRole } from '../middleware/role.middleware';
import { Role } from '../interfaces/user.interfaces';
import { validateCreateTag, validateUpdateTag } from '../validations/tag.validations';

const router = Router();

router.post('/tags', authenticateJWT, authorizeRole(Role.MANAGER), validateCreateTag, create);
router.put('/tags/:id', authenticateJWT, authorizeRole(Role.MANAGER), validateUpdateTag, update);
router.delete('/tags/:id', authenticateJWT, authorizeRole(Role.MANAGER), remove);

router.get('/tags', getAll);
router.get('/tags/:id', getById);

export default router;