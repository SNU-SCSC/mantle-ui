import renderer from "react-test-renderer";
import React from 'react';

import RoundSquareButton from "@/components/button/RoundSquareButton";

describe("<RoundSquareButton /> on Click", () => {
  var clicked = false;
  const tree = renderer.create(
    <RoundSquareButton
      onClick={() => {
        clicked = true;
      }}
      buttonSize="large"
      isPrimary={true}
      color="blue"
      innerText="Click me"
    />,
  );
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
