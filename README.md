# vue-context-component

A react-like context component api for Vue.js

## Installation

```
npm install --save vue-context-api
```

or

```
yarn add vue-context-api
```

## Example Usage

** ThemeContext.js **

```javascript
import { createContext } from "vue-context-api";

// The argument passed to createContext is the default context value
export const { Provider, Consumer } = createContext("light");
```

** App.vue **

```html
<template>
  <!-- value can be reactive. Overrides the default value passed into createContext -->
  <ThemeProvider value="dark">
    <ThemedButton/>
  </ThemeProvider>
</template>

<script>
import ThemedButton from "./ThemedButton";
import { Provider as ThemeProvider } from "./ThemeContext";

export default {
  components: {
    ThemedButton,
    ThemeProvider
  }
};
</script>
```

** ThemedButton.vue **

```html
<template>
  <ThemeConsumer>
    <button slot-scope="theme" :style="setTheme(theme)"/>
  </ThemeConsumer>
</template>

<script>
import { Consumer as ThemeConsumer } from "./ThemeContext";

export default {
  components: {
    ThemeConsumer
  },
  methods: {
    setTheme(theme) {
      return theme === 'light'
        ? 'background-color: white'
        : 'background-color: black'
    }
  }
}
</script>
```
