We welcome contributions for bug fixes and are more conservative about changing the selected set of rules. The way oxlint is structured, you also can layer new rules on top of a config if you wish to customize your lint rules a little differently.

### Setup

This repo uses Node 24 and Yarn 4.

- **Node**: with [mise](https://mise.jdx.dev), run `mise trust` once after checkout — mise refuses to read a new repo's `mise.toml` until you trust it. This is standard mise security behavior. Users of nvm or fnm get the same version from `.nvmrc`.
- **Yarn**: run `corepack enable` once. Corepack then uses the exact Yarn version pinned in the `packageManager` field of `package.json`.

Then install dependencies with `yarn install`.

### Tests

Include a test plan with your pull request and add new tests if needed. Run `yarn test` to run the test suite and help keep this package stable.

Also run `yarn lint` to run this linter configuration on itself. This keeps the code consistently formatted and tests the linter, too.

### Declaration files

The `.d.ts` files are generated from the `.js` sources. After you change a config, run `yarn build:types` and commit the result. CI fails if the committed declaration files do not match the sources.
