import React from "react";
import PortfolioItem from "./PortfolioItem";
import { shallow } from "enzyme";
import data from "../../data/PortfolioData";

const props = data[0];

describe("When Portfolio Item mounts", () => {
  const IntersectionObserver = window.IntersectionObserver;
  const observe = jest.fn();
  const mockRef = { mock: true };

  beforeAll(() => {
    window.IntersectionObserver = jest.fn(function() {
      this.observe = observe;
    });
    const wrapper = shallow(<PortfolioItem {...props} />, { disableLifecycleMethods: true });
    wrapper.getElement().ref(mockRef);
    wrapper.instance().componentDidMount();
  });

  afterAll(() => {
    window.IntersectionObserver = IntersectionObserver;
  });

  it("creates an observer on the ref", () => {
    const wrapper = shallow(<PortfolioItem {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(observe).toHaveBeenCalled();
  });
  // it("should render without crashing", () => {
  //   const wrapper = shallow(<PortfolioItem {...props} />);
  //   expect(wrapper.exists()).toBe(true);
  // });
});
