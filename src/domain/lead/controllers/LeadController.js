const LeadRepository = require('../repositories/leadRepository')
const CreateObjLead = require('../services/createObjLead')
class LeadController { 
    async getAllLeads(req, res) {
        const result = await LeadRepository.getAll();
    
        return res.json({
          message: 'Sucesso em listar todos os leads',
          result,
        });
    }

    async updateLeads(req, res) {
        var obj = CreateObjLead.create(req.body);
        obj = await obj.then(function(valor) {return valor})
        const result = await LeadRepository.update(obj);

        return res.json({
            message: 'Sucesso em atualizar o lead',
            result,
          });
    }
}

module.exports = new LeadController();