import Navbar from "../../modules/core/containers/Navbar";
import { render, screen } from "../test.utils";

describe('Footer', () => {
  it('renders correctly', () => {
      render(<Navbar />);
      const elem = screen.getByText('MyApp');
      expect(elem).toBeInTheDocument();
  });
})