import Loading from "../../modules/core/containers/Loading";
import { render, screen } from "../test.utils";

describe('Footer', () => {
  it('renders correctly', () => {
      render(<Loading />);
      const elem = screen.getByText('Loading ...');
      expect(elem).toBeInTheDocument();
  });
})