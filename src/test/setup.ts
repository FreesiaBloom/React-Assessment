import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { afterAll, afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

afterEach(() => {
  cleanup();
});
