export default function Consumer(context) {
  return {
    data: () => ({
      context
    }),
    render(h) {
      return this.$scopedSlots.default(this.context.value);
    }
  };
}
