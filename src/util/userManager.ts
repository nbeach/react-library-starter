import { createUserManager } from "redux-oidc"

export const userManager = createUserManager({
    client_id: "18903e11-6df6-407e-aef1-c6aa8b2bf74b",
    redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ""}/callback`,
    response_type: "token id_token",
    scope: "openid profile",
    authority: "https://login.microsoftonline.com/jstummepillartechnology.onmicrosoft.com/v2.0",
    silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ""}/silent_renew.html`,
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true,
})

