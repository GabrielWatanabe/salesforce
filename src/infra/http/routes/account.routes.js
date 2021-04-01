const AccountController = require('../../../domain/account/controllers/AccountController');

module.exports = (app) => {
  app.get('/account', AccountController.getAllAccounts);

  app.post('/account/update', AccountController.updateAccounts);

};
