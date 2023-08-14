import { screen } from '@testing-library/react';
import Card from './Card';

describe('CardComplaint', () => {

  it('should render the card correctly', () => {
    const { unmount } = test.customRender(
      <Card />,
      test.genProviderProps('tr'),
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(() => unmount()).not.toThrow();
  });
});
