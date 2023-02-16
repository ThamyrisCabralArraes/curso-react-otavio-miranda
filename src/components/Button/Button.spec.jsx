const { render, screen } = require('@testing-library/react');
const { Button } = require('.');

describe('<Button />', () => {
  it('should render the button with the text', () => {
    render(<Button text='Load more posts' />);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();

    expect(button).toHaveAttribute('class', 'button-next-page');
  });
});
