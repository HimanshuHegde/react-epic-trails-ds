import type { Preview } from '@storybook/react'
import "@/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#111' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

export default preview;