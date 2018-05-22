export default function Consumer(context) {
  return {
    data: () => ({
      context
    }),
    render(h) {
      if (!this.$scopedSlots.default) {
        console.warn("Context consumer expected to define slot-scope");
        return this.$slots.default[0];
      }
      return this.$scopedSlots.default(this.context.value);
    }
  };
}
