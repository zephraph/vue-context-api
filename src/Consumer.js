export default function Consumer(context) {
  return {
    data: () => ({
      context
    }),
    render(h) {
      console.log(context.value);
      return this.$scopedSlots.default(this.context.value);
    }
  };
}
