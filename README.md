# watch-test

Reproduction of v2 addon watching not working when `BROCCOLI_ENABLED_MEMOIZE` is enabled.

To reproduce:

### classic build

Uses `watchDependencies` of `ember-auto-import` to watch for changes in `watch-test` addon.

1. `cd classic-app`
2. `BROCCOLI_ENABLED_MEMOIZE=true pnpm start`
3. separate terminal: `cd watch-test`
4. `pnpm start`
5. change `src/components/watch-test.hbs`
6. Observe how `file changed components/watch-test.js` is shown in the terminal where the app is running
7. Observe how `http://localhost:4200/` is _not_ updating

### Embroider/Webpack build

Uses `@embroider/broccoli-side-watch` to watch for changes in `watch-test` addon.

1. `cd embroider-app`
2. `pnpm start` (note: `BROCCOLI_ENABLED_MEMOIZE=true` is applied automatically in Embroider! )
3. separate terminal: `cd watch-test`
4. `pnpm start`
5. change `src/components/watch-test.hbs`
6. Observe how `file changed components/watch-test.js` is shown in the terminal where the app is running
7. Observe how `http://localhost:4200/` is _not_ updating

To validate that this is working correctly _without_ the memoization flag, you can run step 2 like this instead: `BROCCOLI_ENABLED_MEMOIZE=false pnpm start`
