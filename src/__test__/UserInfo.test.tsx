import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserInfo from "../modules/users/components/UserInfo";

const mockedUsedNavigate = jest.fn();
let userId = '1'; // Set your initial value

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
  useParams: () => ({ userId: userId }),
}));

const renderProvider = (component: any) =>
  render(
      <BrowserRouter>{component}</BrowserRouter>
  );

describe("UserInfo", () => {
  let debug: (arg0: any) => void;
  let container: any;
  
  it("renders correctly", async () => {
    await act( async () => ({ container, debug } = renderProvider(<UserInfo />)));

    const elem = screen.getByText("Sorry.. there was an error");
    expect(elem).toBeInTheDocument();
  });
});

