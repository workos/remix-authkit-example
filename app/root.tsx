// Import the base CSS styles for the radix-ui components.
import '@radix-ui/themes/styles.css';
import { Theme, Card, Container, Flex, Button, Box } from '@radix-ui/themes';

import { cssBundleHref } from '@remix-run/css-bundle';
import type {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
} from '@remix-run/node';
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
  json,
} from '@remix-run/react';

import Footer from './components/footer';
import SignInButton from './components/sign-in-button';

import { withAuth, getSignInUrl, signOut } from '@workos-inc/authkit-remix';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export async function loader({ request }: LoaderFunctionArgs) {
  const data = await withAuth(request, {
    debug: true,
  });

  return json({
    authorizationUrl: await getSignInUrl(),
    ...data,
  });
}

export function useRootLoaderData() {
  return useRouteLoaderData<typeof loader>('root');
}

export async function action({ request }: ActionFunctionArgs) {
  // Called when the form in SignInButton is submitted
  return await signOut(request);
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Theme
          accentColor="iris"
          panelBackground="solid"
          style={{ backgroundColor: 'var(--gray-1)' }}
        >
          <Container style={{ backgroundColor: 'var(--gray-1)' }}>
            <Flex direction="column" gap="5" p="5" height="100vh">
              <Box asChild flexGrow="1">
                <Card size="4">
                  <Flex direction="column" height="100%">
                    <Flex asChild justify="between">
                      <header>
                        <Flex gap="4">
                          <Button asChild variant="soft">
                            <Link to="/">Home</Link>
                          </Button>

                          <Button asChild variant="soft">
                            <Link to="/account">Account</Link>
                          </Button>
                        </Flex>

                        <SignInButton />
                      </header>
                    </Flex>

                    <Flex flexGrow="1" align="center" justify="center">
                      <main>
                        <Outlet />
                      </main>
                    </Flex>
                  </Flex>
                </Card>
              </Box>
              <Footer />
            </Flex>
          </Container>
        </Theme>
      </body>
    </html>
  );
}
