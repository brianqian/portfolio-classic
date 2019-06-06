import { shallow } from "enzyme";
import React from "react";
import Hero from "./Hero";

describe("Hero Container", () => {
  const wrapper = shallow(<Hero />);

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
