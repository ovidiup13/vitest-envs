# Vitest Environments

Experiments with vitest and different environments.

## Objective

- explore the Vitest workspaces with multiple environments: browser and node
- create units for react components
- create units for basic hooks (stateless) and more complex hooks (stateful)

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
