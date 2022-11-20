import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Render App", () => {
  test("Match Snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test("App To be defined", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
