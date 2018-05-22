export default function Provider(context, defaultValue) {
  return {
    Provider: {
      props: {
        value: {
          default: () => defaultValue
        }
      },
      created() {
        context.value = this.value;
      },
      watch: {
        value(v) {
          context.value = v;
        }
      },
      render(h) {
        return this.$slots.default[0];
      }
    }
  };
}
