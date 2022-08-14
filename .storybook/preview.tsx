import "../src/styles/index.css";
import "antd/dist/antd.css";
export const decorators = [(Story) => <Story />];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
