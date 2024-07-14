import { render, screen } from '@testing-library/react'
import Footer from '../modules/core/containers/Footer';

describe('Footer', () => {
  it('renders correctly', () => {
      render(<Footer />);
      const elem = screen.getByText('React Assessment');
      expect(elem).toBeInTheDocument();
  });
})