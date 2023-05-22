import React from "react";
import { render, screen } from "@testing-library/react-native";
import App from "./App";

describe("App", () => {
  it("finds rendered text", () => {
    render(<App />);

    expect(screen.getByText("Count: 0")).toBeTruthy();
  });
});
