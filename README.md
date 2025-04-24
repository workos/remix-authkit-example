# Remix integration example using AuthKit

An example application demonstrating how to authenticate users with AuthKit and the authkit-remix helper library.

> Refer to the [User Management](https://workos.com/docs/user-management) documentation for reference.

## Prerequisites

You will need a [WorkOS account](https://dashboard.workos.com/signup).

## Requirements

Node v18 or higher

## Running the example

Rename the `.env.example` file to `.env` and supply your Client ID and API key as environment variables. The client ID and API key can be found in the [WorkOS dashboard](https://dashboard.workos.com/), and the redirect URI can also be configured there.

```sh
WORKOS_CLIENT_ID=client_... # retrieved from the WorkOS dashboard
WORKOS_API_KEY=sk_test_... # retrieved from the WorkOS dashboard
WORKOS_REDIRECT_URI=http://localhost:3000/callback # configured in the WorkOS dashboard
WORKOS_COOKIE_PASSWORD=<your password> # generate a secure password here
```

`WORKOS_COOKIE_PASSWORD` is the private key used to encrypt the session cookie. It has to be at least 32 characters long. You can use the [1Password generator](https://1password.com/password-generator/) or the `openssl` library to generate a strong password via the command line:

```
openssl rand -base64 24
```

Install the dependencies

```bash
npm install
```

Run the following command and navigate to [http://localhost:3000](http://localhost:3000).

```bash
PORT=3000 npm run dev
```
