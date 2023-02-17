import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value in searchValue', () => {
    const fn = jest.fn();
    render(
      <TextInput
        searchValue={'testando'}
        handleChange={fn}
      />,
    );
    const input = screen.getByPlaceholderText(/search/i);

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();

    render(<TextInput handleChange={fn} />);

    const value = 'ola voce';
    const input = screen.getByPlaceholderText(/search/i);
    userEvent.type(input, value);

    expect(input.value).toBe('ola voce');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
});
