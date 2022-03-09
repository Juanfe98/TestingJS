# Testing with react testing library

## Definition

React testing library is created as an improvment for enzyme and allow us to test our components as if the we were the user.

## Unit Testing

1. When we execute the command `npm test` or `yarn test`, all files called as `<filename>.test.js` inside the project will be executed. This means we should create our test folowing this rule.

### Test Definition.

1. To define our test we have two reserved words, we can use any of these: `it` or `test`.

2. Find the node (HTML element) you want to interact with in order to make your tests.

3. Interact with those elements.

4. Finally you need to assert the results to see if they are as expected.


### Query methods.

[Official documentation](https://testing-library.com/docs/queries/about)

Queries are the methods that Testing Library gives you to find elements on the page. There are several types of queries ("get", "find", "query"); the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry.

1. getBy...: Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found (use getAllBy instead if more than one element is expected).

2. queryBy...: Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found (use queryAllBy instead if this is OK).

3. findBy...: Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms. If you need to find more than one element, use findAllBy.

## Testing examples

1. Validating that a Header component render the title sended in props.

```js
it('Render the title sended as prop', () => {
  render(<Header title="Test Header"/>);
  //Getting the element by the text on it
  const headingElement = screen.getByText(/test header/i);

  //Getting element by the role
  const headingElement2 = screen.getByRole('heading');

  expect(headingElement2).toBeInTheDocument();
});

```

## Important notes and common errors

We are testing our components using the render method, but we test the components on complete isolation, so, when we are using third party package that needs a wrapper like `react-router` with the `link` element, the test will throw an error.

`Invariant failed: You should not use <Link> outside a <Router>`

To Solution this problem we can create inside our test file a mock component to add the wrapper.


