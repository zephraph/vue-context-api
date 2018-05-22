export default function Provider(context, defaultValue) {
  return {
    props: {
      value: {
        default: () => defaultValue
      }
    },
    created() {
      if (this.value !== undefined) {
        context.value = this.value;
      }
    },
    watch: {
      value(v) {
        context.value = v;
      }
    },
    render(h) {
      return this.$slots.default[0];
    }
  };
}
