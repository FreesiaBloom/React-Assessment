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
  it("renders empty component for no breadcrumbs", () => {
    const { container } = renderProvider(<Breadcrumb breadcrumbs={[]} />);

    expect(container.innerHTML).toBe("");
  });

  it("renders correctly for Home view", () => {
    renderProvider(<Breadcrumb breadcrumbs={breadcrumbsHome} />);
    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
  });

  it("renders correctly for UserInfo view", () => {
    renderProvider(
      <Breadcrumb breadcrumbs={breadcrumbsUserInfo} />
    );
    
    const homeLInk = screen.getByRole('link', { name: /Home/i });
    const userId = screen.getByText(breadcrumbsUserInfo[1].label);

    expect(homeLInk.getAttribute('href')).toBe('/')
    expect(userId).toBeInTheDocument();
  });

  it("renders correctly for PostInfo view", () => {
    renderProvider(
      <Breadcrumb breadcrumbs={breadcrumbsPostInfo} />
    );
    
    const homeLInk = screen.getByRole('link', { name: /Home/i });
    const userId = screen.getByRole('link', { name: /1/i });
    const postId = screen.getByText(breadcrumbsPostInfo[2].label);

    expect(homeLInk.getAttribute('href')).toBe('/')
    expect(userId.getAttribute('href')).toBe('/1')
    expect(postId).toBeInTheDocument();
  });
});
