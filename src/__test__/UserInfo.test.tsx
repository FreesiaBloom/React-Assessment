import { act, render, screen } from "@testing-library/react";
import UserInfo from "../modules/users/components/UserInfo";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";


const renderProvider = (component: any) =>
  render(<BrowserRouter><ErrorBoundary fallback={<div>Something went wrong</div>}>{component}</ErrorBoundary></BrowserRouter>);

describe("UserInfo", () => {
  it("renders correctly", () => {
    act(() => {renderProvider(<UserInfo />)})
    const text = screen.getByText("Vite + React");
    expect(text).toBeInTheDocument();
  });
});
