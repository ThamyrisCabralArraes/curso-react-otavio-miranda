import { render, screen } from '@testing-library/react';
import { Posts } from './Index';
import { postMock } from './mock';

const props = postMock;

describe('<Posts />', () => {
  it('should render Posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(4);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(4);
  });
  // expect(screen.getAllByText(/body/i)).toHaveLength(4);
  // expect(screen.getByRole('img', { name: /title1/i })).toHaveAttribute('src', /img/i);
});
