import * as msal from '@azure/msal-browser';

const msalConfig = {
    auth: {
        clientId: 'clienteID', // Client ID do Azure AD
        authority: 'https://login.microsoftonline.com/authorityID', //  URL de autoridade do Azure AD
        redirectUri: 'http://localhost:8080/' // URL de redirecionamento após o login
    }
}

const msalInstance = new msal.PublicClientApplication(msalConfig);

export const loginWithMSAL = () => {
  const request = {
    scopes: ['user.read']
  };

  return msalInstance.loginPopup(request)
    .then(response => {
      console.log('Usuário logado:', response.account);
      return response.account;
    })
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      throw error;
    });
};