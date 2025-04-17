import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/Badge';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'neutral',
        'infoSubtle',
        'successSubtle',
        'warningSubtle',
        'criticalSubtle',
        'dark',
        'white',
        'info',
        'critical',
        'success',
        'warning',
        'bundleBasic',
        'bundleMedium',
        'bundleTop',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    type: 'neutral',
    size: 'md',
    children: 'Neutral Badge',
  },
};

export const WithIcon: Story = {
  args: {
    type: 'info',
    size: 'md',
    icon: <span role="img" aria-label="info">ℹ️</span>,
    children: 'Info Badge',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-2">
      <Badge type="neutral">neutral</Badge>
      <Badge type="infoSubtle">infoSubtle</Badge>
      <Badge type="successSubtle">successSubtle</Badge>
      <Badge type="warningSubtle">warningSubtle</Badge>
      <Badge type="criticalSubtle">criticalSubtle</Badge>
      <Badge type="dark">dark</Badge>
      <Badge type="white">white</Badge>
      <Badge type="info">info</Badge>
      <Badge type="critical">critical</Badge>
      <Badge type="success">success</Badge>
      <Badge type="warning">warning</Badge>
      <Badge type="bundleBasic">bundleBasic</Badge>
      <Badge type="bundleMedium">bundleMedium</Badge>
      <Badge type="bundleTop">bundleTop</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Badge size="sm" type="success">Small Badge</Badge>
      <Badge size="md" type="success">Medium Badge</Badge>
      <Badge size="lg" type="success">Large Badge</Badge>
    </div>
  ),
};
