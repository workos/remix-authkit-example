import { Button, Flex } from '@radix-ui/themes';
import { Form } from 'react-router';
import { useRootLoaderData } from '~/root';

export default function SignInButton({ large }: { large?: boolean }) {
  const rootLoaderData = useRootLoaderData();
  const { user, signInUrl } = rootLoaderData || {};

  if (user) {
    return (
      <Flex gap="3">
        <Form method="post">
          <Button type="submit" size={large ? '3' : '2'}>
            Sign Out
          </Button>
        </Form>
      </Flex>
    );
  }

  return (
    <Button asChild size={large ? '3' : '2'}>
      <a href={signInUrl}>Sign In{large && ' with AuthKit'}</a>
    </Button>
  );
}
