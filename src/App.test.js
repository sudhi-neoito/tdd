import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("App", () => {
  let container = null;
  beforeEach(() => {
    container = shallow(<App />);
  });

  afterEach(() => {
    container.unmount();
  });

  it("should render correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a div <div />", () => {
    const wrapper = container.find("div").length;
    expect(wrapper).toBeGreaterThanOrEqual(1);
  });

  it("Should render a input <input/>", () => {
    const wrapper = container.find("input").length;
    expect(wrapper).toEqual(2);
  });

  it("Should render a button <button/>", () => {
    const wrapper = container.find("button").length;
    expect(wrapper).toEqual(1);
  });

  it("Should have  a text LOGIN", () => {
    const wrapper = container.find("button").text();
    expect(wrapper).toContain("LOGIN");
  });

  it("has an input filed the user can type username", () => {
    const wrapper = container;
    wrapper.find("input[name='username']").simulate("change", {
      target: {
        value: "username",
      },
    });
    wrapper.update();

    expect(wrapper.find("input[name='username']").props().value).toEqual("username");
  });
  it("has an input filed the user can type password", () => {
    const wrapper = container;
    wrapper.find("input[name='password']").simulate("change", {
      target: {
        value: "password",
      },
    });
    wrapper.update();
    expect(wrapper.find("input[name='password']").props().value).toEqual("password");
  });
  it("has a button to Login User without values", () => {
    const wrapper = container;
    wrapper.find("input[name='username']").simulate("change", {
      target: {
        value: "",
      },
    });
    wrapper.update();
    expect(wrapper.find("input[name='username']").props().value).toEqual("");
    wrapper.find("input[name='password']").simulate("change", {
      target: {
        value: "",
      },
    });
    wrapper.update();
    expect(wrapper.find("input[name='password']").props().value).toEqual("");
    wrapper.find("button").find("#login-button").simulate("click");

    expect(wrapper.find("span").find("#error").text()).toEqual("Invalid Username and Password");
  });

  it("has a button Login with values", () => {
    const wrapper = container;
    wrapper.find("input[name='username']").simulate("change", {
      target: {
        value: "sameera",
      },
    });
    wrapper.update();
    expect(wrapper.find("input[name='username']").props().value).toEqual("sameera");
    wrapper.find("input[name='password']").simulate("change", {
      target: {
        value: "sam123",
      },
    });
    wrapper.update();
    expect(wrapper.find("input[name='password']").props().value).toEqual("sam123");
    expect(wrapper.find("button").find("#login-button").props().onClick()).toEqual("saved");
  });
  it("Should have a button onClick event", () => {
    const wrapper = container.find("button").find("#login-button").props().onClick();

    expect(wrapper).toEqual("not");
  });
});
