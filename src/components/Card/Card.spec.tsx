import { screen, render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('should render the card correctly', () => {
    const { unmount } = render(
      <Card />,
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(() => unmount()).not.toThrow();
  });
});
