import { workos } from './workos';
import { WORKOS_CLIENT_ID, WORKOS_REDIRECT_URI } from './env-variables';
import { GetAuthURLOptions } from './interfaces';

async function getAuthorizationUrl(options: GetAuthURLOptions = {}) {
  const { returnPathname, screenHint } = options;

  return workos.userManagement.getAuthorizationUrl({
    provider: 'authkit',
    clientId: WORKOS_CLIENT_ID,
    redirectUri: WORKOS_REDIRECT_URI,
    state: returnPathname
      ? btoa(JSON.stringify({ returnPathname }))
      : undefined,
    screenHint,
  });
}

export { getAuthorizationUrl };
