import controller from '../controllers/v1';
import middleware from '../middlewares';

const rolesController = controller.roles;
const usersController = controller.user;
const authController = controller.auth;
const documentController = controller.document;
const searchController = controller.search;
const auth = middleware.authentication;

const verify = auth.verifyToken;
const adminAccess = auth.adminAccess;
// const userAccess = auth.userAccess;

const Routes = (app) => {
  /**
   * crud api for roles model
   */
  app
    .route('/roles')
    .post(verify, adminAccess, rolesController.create)
    .get(verify, adminAccess, rolesController.list);
  app
    .route('/roles/:id')
    .get(verify, adminAccess, rolesController.retrieve)
    .put(verify, adminAccess, rolesController.update)
    .delete(verify, adminAccess, rolesController.destroy);

  // user authentication
  app
    .route('/users/login')
    .post(authController.login);

  app
    .route('/users/logout')
    .post(authController.logout);

  /**
   * crud api for user model
   */

  app
    .route('/users')
    .post(usersController.create)
    .get(verify, adminAccess, usersController.list);

  app
    .route('/users/:id')
    .get(verify, usersController.retrieve)
    .put(verify, usersController.update)
    .delete(verify, usersController.destroy);

  app
    .route('/api/users/:identifier')
    .get(usersController.getExistingUser);


  app
    .route('/users/:id/documents')
    .get(verify, usersController.findUserDocuments);

  /**
   * crud api for document model
   */
  app
    .route('/documents')
    .post(verify, documentController.create)
    .get(verify, adminAccess, documentController.list);

  app
    .route('/documents/:id')
    .get(verify, documentController.retrieve)
    .put(verify, documentController.update)
    .delete(verify, documentController.destroy);

  app.route('/users/:id/alldocuments')
.get(verify, documentController.findAllUserDocument);

  /**
   * Search API
   */

  app
    .route('/search/users/')
    .get(verify, adminAccess, searchController.userSearch);

  app
    .route('/search/documents/')
    .get(verify, searchController.documentSearch);
};

export default Routes;
