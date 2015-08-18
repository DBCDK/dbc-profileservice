'use strict';

/**
 * @file Environment-dependant configuration
 */


let profileServiceHost = '127.0.0.1';
let profileServicePort = '3000';

let pgHost = '127.0.0.1';
let pgPort = '8080';

switch (process.env.NODE_ENV) {
  case 'production':
        profileServiceHost = 'some-production-url';
        break;
  case 'development':
        profileServiceHost = 'http://uxscrum-i01.dbc.dk';
        break;
  default:
        break;
}


module.exports.serviceUrl =  profileServiceHost + ":" + profileServicePort;

module.exports.pgUrl =  pgHost + ":" + pgPort;