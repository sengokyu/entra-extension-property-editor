import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority:
      'https://login.microsoftonline.com/a7c09d81-121c-4816-b499-55e4f96b3b71/v2.0',
    authWellknownEndpointUrl: 'https://login.microsoftonline.com/common/v2.0',
    redirectUrl: window.location.origin,
    clientId: '287ade13-1801-48a6-bb6d-f9b2493804cb',
    scope: 'openid .default', // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    maxIdTokenIatOffsetAllowedInSeconds: 600,
    issValidationOff: false,
    autoUserInfo: false,
    customParamsAuthRequest: {
      prompt: 'select_account', // login, consent
    },
  },
};
