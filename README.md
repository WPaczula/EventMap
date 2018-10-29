# EventMap

## Description

Project written for the university purposes. Feel free to use it if you want.

## Prerequisites

You need to have `npm` and `node` installed to develop this app.

## Setup

After cloning the repo run 

```npm i```

It should download all required packages. Now you are ready to go

## Running the app

If you want to start the client use

```npm run start```

It will run a webpack-dev-server on your localhost:8080. It supports hot reloading so your changes will be shown immediately on the browser.

To run the server run:

```npm run build```
```npm run server```

They will build the app and store the bundle in the `build` folder. The second command will run a `nodemon` server on localhost:5000. Use this method to check if SSR works as intended.

## Lint

This workspace has configured `Eslint`. It will show your errors in codestyle and try to repair them when you save the files. Linter is also fired before push (via husky), so no code can be pushed to the repo without fulfilling the style requirements.
