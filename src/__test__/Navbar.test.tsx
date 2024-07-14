import { render, screen } from '@testing-library/react'
import Navbar from "../modules/core/containers/Navbar";

describe('Navbar', () => {
  it('renders correctly', () => {
      render(<Navbar />);
      const elem = screen.getByText('MyApp');
      expect(elem).toBeInTheDocument();
  });
})