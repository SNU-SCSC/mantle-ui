import renderer from "react-test-renderer";
import React from 'react';

import BoardDropdown from "@/components/dropdown/BoardDropdown";

describe("<BoardDropdown /> on Click", () => {
  var clicked = false;
  const tree = renderer.create(
    <BoardDropdown
      onSelect={() => {
        clicked = true;
      }}
      subject="Test"
      items={["item1", "item2", "item3"]}
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
