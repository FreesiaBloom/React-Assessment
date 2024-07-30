import { useLocation as useLocationHook } from "react-router-dom";
import useBreadcrumb from "../../modules/core/hooks/useBreadcrumbs";
import { Crumb } from "../../modules/core/utils/interfaces";
import { renderHook } from "@testing-library/react";

let mockUseLocationValue: string = "";

describe("useBreadcrumb", () => {
    const useLocationSpy = vi.spyOn(useLocationHook, 'useLocation');

  it("should return empty array for not found pathname", () => {
    useLocationSpy.mockReturnValue({
        pathname: "",
    });

    const breadcrumbs: Crumb[] = useBreadcrumb();

    expect(breadcrumbs).toEqual([]);
  });

  it("should return Home breacrumbs for Home path", () => {
    mockUseLocationValue = "/";
    const breadcrumbs: Crumb[] = useBreadcrumb();

    expect(breadcrumbs).toEqual([{ label: "Home", to: "" }]);
  });

  it("should return PostInfo breacrumbs for PostId path", () => {
    mockUseLocationValue = "/1/1";
    const breadcrumbs: Crumb[] = useBreadcrumb();

    expect(breadcrumbs).toEqual([
      { label: "Home", to: "/" },
      { label: "1", to: "1" },
      { label: "1", to: "" },
    ]);
  });
});
