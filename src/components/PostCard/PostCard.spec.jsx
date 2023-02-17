import { render, screen } from '@testing-library/react';
import { PostCard } from './Index';
import { postCardMock } from './mock';

const props = postCardMock;

describe('<PostCard />', () => {
  it('should be render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(/title/i)).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /title/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText('body1')).toBeInTheDocument();
  });
});
