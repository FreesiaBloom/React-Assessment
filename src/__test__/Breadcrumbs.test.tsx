import { render, screen } from "@testing-library/react";
import Breadcrumb from "../modules/core/components/Breadcrumbs";
import { BrowserRouter } from "react-router-dom";

const breadcrumbsHome = [{ label: "Home", to: "" }];
const breadcrumbsUserInfo = [
  { label: "Home", to: "/" },
  { label: "1", to: "" },
];
const breadcrumbsPostInfo = [
  { label: "Home", to: "/" },
  { label: "1", to: "1" },
  { label: "2", to: "" },
];

const renderProvider = (component: any) =>
  render(<BrowserRouter>{component}</BrowserRouter>);

describe("Breadcrumbs", () => {
  it("renders correctly for Home view", () => {
    renderProvider(<Breadcrumb breadcrumbs={breadcrumbsHome} />);
    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
  });

  it("renders correctly for UserInfo view", () => {
    renderProvider(
      <Breadcrumb breadcrumbs={breadcrumbsUserInfo} />
    );
    
    const userId = screen.getByText("1");
    const homeLInk = screen.getByRole('link', { name: /Home/i });

    expect(homeLInk.getAttribute('href')).toBe('/')
    expect(userId).toBeInTheDocument();
  });

  it("renders correctly for PostInfo view", () => {
    renderProvider(
      <Breadcrumb breadcrumbs={breadcrumbsPostInfo} />
    );
    
    const userId = screen.getByText("2");
    const homeLInk = screen.getByRole('link', { name: /Home/i });
    const userLInk = screen.getByRole('link', { name: /1/i });

    expect(homeLInk.getAttribute('href')).toBe('/')
    expect(userLInk.getAttribute('href')).toBe('/1')
    expect(userId).toBeInTheDocument();
  });
});
