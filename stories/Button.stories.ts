import type { Meta, StoryObj } from '@storybook/react';
import { RectButton } from '@/components/Button';

const meta = {
  title: 'Components/Button',
  component: RectButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    size: { control: 'radio', options: ['fit', 'small', 'medium', 'large'] },
    icon: { control: 'radio', options: ['left', 'right'] },
    state: { control: 'radio', options: ['default', 'pressed', 'hover', 'loading'] },
    background: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof RectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    icon: 'right',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'large',
    icon: 'left',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    state: 'loading',
    label: 'Loading Button',
  },
};
