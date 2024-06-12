import { getAuthorizationUrl } from './get-authorization-url';
import { terminateSession } from './session';

async function getSignInUrl() {
  return getAuthorizationUrl({ screenHint: 'sign-in' });
}

async function getSignUpUrl() {
  return getAuthorizationUrl({ screenHint: 'sign-up' });
}

async function signOut(request: Request) {
  return await terminateSession(request);
}

export { getSignInUrl, getSignUpUrl, signOut };
