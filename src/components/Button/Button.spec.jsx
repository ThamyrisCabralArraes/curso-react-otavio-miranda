const { render, screen, fireEvent } = require('@testing-library/react');
const { Button } = require('.');

describe('<Button />', () => {
  it('should render the button with the text', () => {
    render(<Button text='Load more posts' />);
    expect.assertions(2);
    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();

    expect(button).toHaveAttribute('class', 'button-next-page');
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(
      <Button
        text='Load more posts'
        onClick={fn}
      />,
    );

    const button = screen.getByRole('button', { name: /load more posts/i });
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    render(
      <Button
        text='Load more posts'
        disabled={true}
      />,
    );

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(
      <Button
        text='Load more posts'
        disabled={false}
      />,
    );

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();

    expect(button).toBeEnabled();
  });
});
