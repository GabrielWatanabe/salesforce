const express = require("express");
const path = require("path")
const { Connection } = require("jsforce");
const jsforce = require('jsforce');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser')
const PORT = 3001;

const { SF_LOGIN_URL, 
        SF_USERNAME, 
        SF_PASSWORD,
        CLIENT_ID,
        CLIENT_SECRET, 
        SF_URL_SALES } = process.env;
// const conn = new jsforce.Connection({
//     loginUrl: SF_LOGIN_URL
// });

const oauth2 = new jsforce.OAuth2({
    // loginUrl : SF_LOGIN_URL,
    clientId : CLIENT_ID,
    clientSecret : CLIENT_SECRET,
    redirectUri : 'http://localhost:3001/oauth2/callback'
});

app.use(express.static(path.join(__dirname, '../build')));

app.post("/oauth2/oauth", function(req, res) {
    res.redirect(oauth2.getAuthorizationUrl({ scope : 'api id web' }));
    // const authorization = oauth2.getAuthorizationUrl({ scope : 'api id web refresh_token' })
    // res.redirect(`/oauth2/callback/?${authorization}`);
});

app.get("/oauth2/callback", function(req, res) {
    const conn = new jsforce.Connection({oauth2: oauth2});
    const code = "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9LBJLApeX_PA5NfRQYhPwBLD1HN7EbJb1i1DHK.5_fFjBgkj.Da5YllmhKCJJfcSKJMrNTST9If9qqkSE&redirect_uri=https://login.salesforce.com"
    conn.authorize(code, function(err, userInfo) {
        if (err) { return console.error("This error is in the auth callback: " + err); }

        console.log('Access Token: ' + conn.accessToken);
        console.log('Instance URL: ' + conn.instanceUrl);
        console.log('refreshToken: ' + conn.refreshToken);
        console.log('User ID: ' + userInfo.id);
        console.log('Org ID: ' + userInfo.organizationId);

        req.session.accessToken = conn.accessToken;
        req.session.instanceUrl = conn.instanceUrl;
        req.session.refreshToken = conn.refreshToken;

        res.redirect('http://localhost:3001');
    });
});

app.get('/', (req, res) => {
    res.send("Salesforce integration with node")
});


app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`)   
});


