import type { Preview } from '@storybook/react'
import "@/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: '#27272a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

export default preview;