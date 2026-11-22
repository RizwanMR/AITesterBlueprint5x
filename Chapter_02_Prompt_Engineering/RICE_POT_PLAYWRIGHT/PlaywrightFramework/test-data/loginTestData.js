export const invalidLoginScenarios = Object.freeze([
  {
    name: 'invalid username with valid password',
    username: 'SALESFORCE_INVALID_USERNAME',
    password: 'SALESFORCE_PASSWORD'
  },
  {
    name: 'valid username with invalid password',
    username: 'SALESFORCE_USERNAME',
    password: 'SALESFORCE_INVALID_PASSWORD'
  },
  {
    name: 'invalid username with invalid password',
    username: 'SALESFORCE_INVALID_USERNAME',
    password: 'SALESFORCE_INVALID_PASSWORD'
  },
  {
    name: 'empty username and empty password',
    username: null,
    password: null
  },
  {
    name: 'empty username with populated password',
    username: null,
    password: 'SALESFORCE_INVALID_PASSWORD'
  },
  {
    name: 'populated username with empty password',
    username: 'SALESFORCE_USERNAME',
    password: null
  }
]);
