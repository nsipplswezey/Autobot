
 var config = {
  //username : 't-sippn',
  //repo : 'orion-docs',
  
  username : 'starkc',
  repo : 'livereview',
  
  hookUrl : 'http://localhost:4568/webhook',
  localHostUrl : 'http://1bbd94a2.ngrok.io/webhook',
 };



 config.baseUrl = 'https://github.com/' + config.username + '/' + config.repo;

// public github
// config.apiUrl = 'https://api.github.com/repos/' + config.username + '/' + config.repo;

// enterprise, autodesk, github
 config.apiUrl = 'https://git.autodesk.com/api/v3/repos/' + config.username + '/' + config.repo;

module.exports =  config;