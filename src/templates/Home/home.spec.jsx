import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home from '.';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    console.log('oiiiiiiiiiiiiiiiiiiiii');
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title1',
          body: 'body1',
        },
        {
          userId: 2,
          id: 2,
          title: 'title2',
          body: 'body1',
        },
        {
          userId: 3,
          id: 3,
          title: 'title3',
          body: 'body1',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home/>', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render search, posts and load more ', async () => {
    const { debug } = render(<Home />);

    // await waitForElementToBeRemoved()
    debug();
  });
});
