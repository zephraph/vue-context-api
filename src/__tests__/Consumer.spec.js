import consumer from "../Consumer";
import { mount } from "@vue/test-utils";

const registerComponent = context => ({
  components: {
    Consumer: consumer(context)
  }
});

const ConsumerComponent = context => ({
  template: `
    <Consumer>
      <span slot-scope="contextValue">
        {{ contextValue }}
      </span>
    </Consumer>
  `,
  ...registerComponent(context)
});

const MalformedConsumerComponent = context => ({
  template: `
    <Consumer>
      <span>
        test
      </span>
    </Consumer>
  `,
  ...registerComponent(context)
});

describe("Consumer", () => {
  it("should return the given context as data", () => {
    const s = Symbol();
    expect(consumer(s).data().context).toBe(s);
  });

  it("should render the context's value", () => {
    const Consumer = ConsumerComponent({ value: "test-context" });
    const wrapper = mount(Consumer);
    expect(wrapper.html()).toContain("test-context");
  });

  it("should not fail to render if consumer is missing slot-scope", () => {
    const Consumer = MalformedConsumerComponent({ value: "test-context" });
    const wrapper = mount(Consumer);
    expect(wrapper.html()).toContain("test");
  });
});
