import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
   // Url of the Identity Provider
   issuer: 'https://localhost:44360',

   // URL of the SPA to redirect the user to after login
   redirectUri: window.location.origin + '/dashboard',
 
   // The SPA's id. The SPA is registered with this id at the auth-server
   clientId: 'ClientPG-app',
 
   // set the scope for the permissions the client should request
   // The first three are defined by OIDC. The 4th is a usecase-specific one
   scope: 'ConfigurationAPI configurationapi:centers:read configurationapi:centers:write configurationapi:message:read configurationapi:message:write configurationapi:monitor:read configurationapi:monitor:write configurationapi:values:read configurationapi:writer:read configurationapi:writer:write',
};
