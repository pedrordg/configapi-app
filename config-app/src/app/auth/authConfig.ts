import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
   // Url of the Identity Provider
   issuer: 'https://localhost:44360',

   // URL of the SPA to redirect the user to after login
   redirectUri: window.location.origin + '/home',

   // The SPA's id. The SPA is registered with this id at the auth-server
   clientId: 'ClientPG-app',

   // set the scope for the permissions the client should request
   // The first three are defined by OIDC. The 4th is a usecase-specific one
   scope: 'ConfigurationAPI configurationapi:monitor:read',

   oidc: true,
};
