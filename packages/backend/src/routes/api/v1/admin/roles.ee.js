import { Router } from 'express';
import { authenticateUser } from '../../../../helpers/authentication.js';
import { authorizeAdmin } from '../../../../helpers/authorization.js';
import { checkIsEnterprise } from '../../../../helpers/check-is-enterprise.js';
import createRoleAction from '../../../../controllers/api/v1/admin/roles/create-role.ee.js';
import getRolesAction from '../../../../controllers/api/v1/admin/roles/get-roles.ee.js';
import getRoleAction from '../../../../controllers/api/v1/admin/roles/get-role.ee.js';

const router = Router();

router.post(
  '/',
  authenticateUser,
  authorizeAdmin,
  checkIsEnterprise,
  createRoleAction
);

router.get(
  '/',
  authenticateUser,
  authorizeAdmin,
  checkIsEnterprise,
  getRolesAction
);

router.get(
  '/:roleId',
  authenticateUser,
  authorizeAdmin,
  checkIsEnterprise,
  getRoleAction
);

export default router;
