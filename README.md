# lit-test

## Getting set up

### Parcel

Make sure to [disable safe write](https://parceljs.org/hmr.html#safe-write)
in your editor to make sure the dev server can properly detect file changes.

### Cypress

Read the
[getting started docs](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)
to ensure that you have all of the dependencies installed (it *should* just
work). Tests can be found in `cypress/integration/`.

## Scripts

### npm run dev

Starts the parcel dev server with hot reloading, refresh the page to see the
changes. See the **Getting set up** section if the changes are not being
reflected.

### npm run build

Runs a production build, outputs to `dist/`.

### npm run test

Opens the cypress test-runner window and starts the dev server. Click a test to
run it and visit the cypress docs to learn more about the runner.
