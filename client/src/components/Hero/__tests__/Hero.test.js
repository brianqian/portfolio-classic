import { shallow } from "enzyme";
import React from "react";
import Hero from "../Hero";
import ImagePanel from "../ImagePanel";

describe("Hero Container", () => {
  const wrapper = shallow(<Hero />);

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("image panel renders according to desktopView", () => {
    let wrapper = shallow(<Hero desktopView={true} />);
    expect(wrapper.find("ImagePanel").exists()).toBe(true);
    expect(wrapper.find("ImageContainer").children()).toHaveLength(3);
    wrapper = shallow(<Hero desktopView={false} />);
    expect(wrapper.find("ImagePanel").exists()).toBe(false);
  });
  it("loaded state changes after loading", () => {
    jest.useFakeTimers();
    expect(wrapper.state().loaded).toEqual(false);
    const timer = wrapper.instance().setLoadedState;
    timer();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0);
    jest.runOnlyPendingTimers();
    expect(wrapper.state().loaded).toEqual(true);
  });
});

describe("Image Panel", () => {
  const props = {
    order: "1",
    path: "./img/HeroImages",
    titles: ["sf", "computer", "city"],
  };
  const wrapper = shallow(<ImagePanel {...props} />);
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  fit("rotates images every 6 seconds", () => {
    jest.useFakeTimers();
    const rotateImages = jest.fn();
    const cdm = wrapper.instance().componentDidMount;
    cdm();
    jest.advanceTimersByTime(6000);
    expect(rotateImages).toHaveBeenCalledTimes(1);
    expect(rotateImages).toHaveBeenCalledWith(expect.any(Function), 6000);
  });
});
