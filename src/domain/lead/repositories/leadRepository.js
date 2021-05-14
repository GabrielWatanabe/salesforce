const unirest = require('unirest');
require('dotenv').config()
const account = require('../models/lead');
const AccountRepository = require('../../account/repositories/accountRepository')
const ConectAuthSalesForce = require('../../../infra/oauth/conectAuthSalesForce')

const { SF_LOGIN_URL } = process.env;

class LeadRepository {
  async getAll() {
    const token = await ConectAuthSalesForce.login();
  
    const leads = await unirest.get(SF_LOGIN_URL + `/services/data/v20.0/query?q=SELECT ID, CNPJ__c FROM LEAD WHERE (NOT Status = 'Congelado') AND (NOT Status = 'Bloqueado')`)
                            .headers({
                              "Content-Type": "application/json",
                              "Authorization": "Bearer " + token
                            });
    return leads.body.records;
  }

  async getById(name) {
    const token = await ConectAuthSalesForce.login();
  
    const leads = await unirest.get(SF_LOGIN_URL + `/services/data/v20.0/query?q=SELECT ID, CNPJ__c FROM ACCOUNT WHERE Name = ${name}`)
                            .headers({
                              "Content-Type": "application/json",
                              "Authorization": "Bearer " + token
                            });
    return leads.body.records;
  }

  async update(obj) {
    const token = await ConectAuthSalesForce.login();
    const id = await AccountRepository.getById(obj.name)
    try {
      if (id != null) {
         return await unirest.post(SF_LOGIN_URL + `/services/data/v20.0/sobjects/Lead`)
                          .headers({
                                 "Content-Type": "application/json",
                                 "Authorization": "Bearer " + token
                              })
                              .send(JSON.stringify(obj))
      } else {
         return await unirest.patch(SF_LOGIN_URL + `/services/data/v20.0/sobjects/Lead/${id}`)
                          .headers({
                                 "Content-Type": "application/json",
                                 "Authorization": "Bearer " + token
                              })
                              .send(JSON.stringify(obj))
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

module.exports = new LeadRepository();