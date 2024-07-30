
import Footer from "../../modules/core/containers/Footer";
import { render, screen } from "../test.utils";

describe('Footer', () => {
  it('renders correctly', () => {
      render(<Footer />);
      const elem = screen.getByText('React Assessment');
      expect(elem).toBeInTheDocument();
  });
})