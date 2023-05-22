import React from "react";
import { View, Text } from "react-native";
import { render, screen } from "@testing-library/react-native";

it("finds rendered text", () => {
  render(
    <View>
      <Text>hello</Text>
    </View>
  );

  expect(screen.getByText("hello")).toBeTruthy();
});
