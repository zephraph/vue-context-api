import provider from "../Provider";
import { mount } from "@vue/test-utils";

describe("Provider", () => {
  it("should have a prop with the given default value", () => {
    const defaultValue = "TEST";
    const Provider = provider({}, defaultValue);
    const wrapper = mount(Provider, {
      slots: {
        default: "<span>Test</span>"
      }
    });
    expect(wrapper.props().value).toBe(defaultValue);
  });

  it("should not overwrite context if no prop provided", () => {
    let context = { value: "test" };
    const Provider = provider(context);
    const wrapper = mount(Provider, {
      slots: {
        default: "<span>Test</span>"
      }
    });
    expect(context.value).toBeDefined();
  });

  it("should update context when props change", () => {
    let context = { value: "test" };
    const Provider = provider(context);
    const wrapper = mount(Provider, {
      slots: {
        default: "<span>Test</span>"
      }
    });
    wrapper.setProps({ value: "123" });
    expect(context.value).toBe("123");
  });
});
