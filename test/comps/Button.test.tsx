import renderer from "react-test-renderer";
import React from "react";

import Button from "@/comps/Button";

describe("<Button /> on Click", () => {
  var clicked = false;
  const tree = renderer.create(<Button onClick={() => {clicked = true}}/>);
  const button = tree.root.findByType("button");

  test("Variable clicked becomes true", () => {
    expect(tree.toJSON()).toMatchSnapshot();

    renderer.act(() => {
      button.props.onClick();
    });

    expect(tree.toJSON()).toMatchSnapshot();
    expect(clicked).toBe(true);
  });
});
