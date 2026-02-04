//const packageJson = require('../../package.json');
const HOST = 'https://localhost:7147/api';
const enviromentsName = "Ambiente de Pruebas"
export const enviroments = {
  msalConfiguration: {
    auth: {
      clientId: '',
      authority: '',
      redirectUri: 'https://localhost:7147/',
    },
    system: {
      allowNativeBroker: false, // Disables native brokering support
    },
  },
  API_PUBLIC: HOST + '/',
  production: true,
  context: 'develop',
  ENVIRONMENT_NAME : enviromentsName,
  //version: packageJson.version,
  minutesInactive: 30,
  minutesToRefresh: 5,
};
