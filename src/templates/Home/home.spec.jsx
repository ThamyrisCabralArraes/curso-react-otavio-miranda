import { render, screen } from '@testing-library/react';
import Home from '.';

describe('<Home/>', () => {
  it('should  search, posts and load more ', async () => {
    render(<Home />);
  });
});
