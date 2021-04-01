const unirest = require('unirest');
require('dotenv').config()
const account = require('../models/account');
const ConectAuthSalesForce = require('../../../infra/oauth/conectAuthSalesForce')

const { SF_LOGIN_URL } = process.env;

class AccountRepository {
  async getAll() {
    const token = await ConectAuthSalesForce.login();
  
    const accounts = await unirest.get(SF_LOGIN_URL + '/services/data/v20.0/query?q=SELECT ID, CNPJ__c FROM ACCOUNT')
                            .headers({
                              "Content-Type": "application/json",
                              "Authorization": "Bearer " + token
                            });
    return accounts.body.records;
  }

  async getById(name) {
    const token = await ConectAuthSalesForce.login();
  
    const accounts = await unirest.get(SF_LOGIN_URL + `/services/data/v20.0/query?q=SELECT ID, CNPJ__c FROM ACCOUNT WHERE Name = ${name}`)
                            .headers({
                              "Content-Type": "application/json",
                              "Authorization": "Bearer " + token
                            });
    return accounts.body.records;
  }

  async update(obj) {
    const token = await ConectAuthSalesForce.login();
    const id = await AccountRepository.getById(obj.name)
    try {
       await unirest.patch(SF_LOGIN_URL + `/services/data/v20.0/sobjects/Account/0012h00000G7jYpAAJ${id}`)
                        .headers({
                               "Content-Type": "application/json",
                               "Authorization": "Bearer " + token
                            })
                            .send(JSON.stringify(obj))
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

module.exports = new AccountRepository();