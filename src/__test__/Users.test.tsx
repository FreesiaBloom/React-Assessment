import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import Users from "../modules/users/components/Users";
import { BrowserRouter } from "react-router-dom";

import { userData } from "../mock/userListData";
import { State } from "../modules/core/utils/interfaces";

const initialState: State = {
  userData: userData,
  dataError: false,
};

const renderProvider = (component: any) =>
  render(<BrowserRouter>{component}</BrowserRouter>);

describe("Users", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('renders loading screen for empty users"', () => {
    useSelectorMock.mockReturnValue({ initialState });

    renderProvider(<Users />);

    const elem = screen.getByTestId("Bret");
    expect(elem).toBeInTheDocument();
  });
});
