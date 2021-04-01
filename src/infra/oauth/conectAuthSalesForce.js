const jsforce = require('jsforce');
var unirest = require('unirest');

class ConectAuthSalesForce {
    async login() {
        const { SF_LOGIN_URL,
            CLIENT_ID,
            CLIENT_SECRET,
            SF_USERNAME, 
            SF_PASSWORD,
             } = process.env;
        
        const response = await unirest.post(`${SF_LOGIN_URL}/services/oauth2/token?grant_type=password&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&username=${SF_USERNAME}&password=${SF_PASSWORD}SyjX7p8jFTnpE9jWKUardyDm`);

        const token = response.body.access_token;
        
        return token;
    }
}

module.exports = new ConectAuthSalesForce();