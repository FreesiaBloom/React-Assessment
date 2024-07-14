import { act, render, screen, waitFor } from "@testing-library/react";
import Users from "../modules/users/components/Users";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../modules/core/store/store";
import { server } from "../mock/server";

const renderProvider = (component: any) => render(
  <Provider store={store}>
    <BrowserRouter>
      {component}
    </BrowserRouter>
  </Provider>
);

describe("Users", () => {
  it('renders loading screen for empty users"', () => {
    renderProvider(<Users />);

    const elem = screen.getByText("Loading...");
    expect(elem).toBeInTheDocument();
  });

  // it('renders table for loaded users"', async () => {
  //   renderProvider(<Users />);
  //   await waitFor(() => {
  //     const elem = screen.getAllByRole("table");
  //     expect(elem).toBeInTheDocument();
  //   })
  // });

  // it('renders', async () => {
  //   await (act(() => {
  //     renderProvider(<Users />);
  //   }))

  //   const elem = await screen.getByText("Loading...");
  //   expect(elem).toBeInTheDocument();
  // })
});

