import { render } from '@testing-library/react';
import Root from './Root';

describe('Root', () => {
  test('renders App component', () => {
    render(<Root />);
  });
});
