# Vitest Environments

Experiments with vitest and different environments.

## Objective

- explore the Vitest workspaces with multiple environments: browser and node
- create units for react components
- create units for basic hooks (stateless) and more complex hooks (stateful)

## Setup

```sh
pnpm i
```

Run the units:

```sh
pnpm test
```

You should get a similar result:

```sh
❯ pnpm test

> vitest-envs@1.0.0 test
> vitest --run


 RUN  v3.0.3

 ✓  node  react/simple-hook.node.spec.ts (1 test) 8ms
 ✓  node  react/component.node.spec.tsx (1 test) 5ms
 ✓  node  react/state-hook.node.spec.ts (1 test) 3ms
 ✓  happy-dom  src/react/simple-hook.spec.ts (1 test) 5ms
 ✓  happy-dom  src/react/state-hook.spec.ts (1 test) 6ms
 ✓  happy-dom  src/react/component.spec.tsx (1 test) 8ms

 Test Files  6 passed (6)
      Tests  6 passed (6)
   Start at  01:09:28
   Duration  570ms (transform 81ms, setup 267ms, collect 331ms, tests 35ms, environment 506ms, prepare 447ms)

```

## Observations

Overall, this setup works well.

Unfortunately, I did run into some minor inconveniences:

- The vitest globals only works when placed in `tsconfig.json`. When the `types` option is included in a more specific config file (such as `tsconfig.test.json`), then Typescript does not load the types from `vitest/globals`. For now, I am directly importing the test helper functions inside of each test. One to follow up.
- Testing library rendering on the server is doing a snapshot test. Using `renderToString`. The default `render` function from the testing library expects to run in an environment that has the DOM APIs present. There must be a way to render the components to a string but still run the `query*` assertions of the testing lib. Another one to follow up.
- The hook renders for node uses a third party library `@testing-library/react-hooks` that will be superseded. It still works, but it's rather outdated (the react and react-dom peers are expecting the upper version to be `^17.0.0`). Latest react version at the time of writing is `19.0.0`. The benefit is that the [lib has support for rendering hooks on the server](https://react-hooks-testing-library.com/installation#being-specific).

## References

- [Vitest workspaces](https://vitest.dev/guide/workspace.html#defining-a-workspace)
- [Typescript cheatsheet](https://www.totaltypescript.com/tsconfig-cheat-sheet)
- [Happy DOM](https://github.com/capricorn86/happy-dom/)
