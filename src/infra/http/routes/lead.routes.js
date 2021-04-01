const LeadController = require('../../../domain/lead/controllers/LeadController');

module.exports = (app) => {
  app.get('/lead', LeadController.getAllLeads);

  app.post('/lead/update', LeadController.updateLeads);

};