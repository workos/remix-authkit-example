import { redirect } from "@remix-run/node";
import { getSignInUrl } from "@workos-inc/authkit-remix";

export const loader = async () => {
  const signInUrl = await getSignInUrl();
  
  return redirect(signInUrl);
};
