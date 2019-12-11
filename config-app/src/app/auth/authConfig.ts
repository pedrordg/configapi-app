import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  clientId: 'ClientPG',

  dummyClientSecret: '',

  tokenEndpoint: 'https://mpg-app-02.qa-fd.local:55443/connect/token',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'ConfigurationAPI configurationapi:centers:read RegistrationAPI registrationapi:message:read registrationapi:message:write',
};
