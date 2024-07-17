import { render, screen } from '@testing-library/react'
import Loading from '../modules/core/containers/Loading';

describe('Loading', () => {
  it('renders correctly', () => {
      render(<Loading />);
      const elem = screen.getByText('Loading...');
      expect(elem).toBeInTheDocument();
  });
})