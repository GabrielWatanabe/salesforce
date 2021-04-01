const AccountRepository = require('../repositories/accountRepository')
const CreateObjAccount = require('../services/createObjAccount')
class AccountController { 
    async getAllAccounts(req, res) {
        const result = await AccountRepository.getAll();
    
        return res.json({
          message: 'Sucesso em listar todas as contas',
          result,
        });
    }

    async updateAccounts(req, res) {
        var obj = CreateObjAccount.create(req.body);
        obj = await obj.then(function(valor) {return valor})
        const result = await AccountRepository.update(obj);

        return res.json({
            message: 'Sucesso em atualizar a conta',
            result,
          });
    }
}

module.exports = new AccountController();