import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@/components/Accordion';
import { AccordionItem } from '@/components/Accordion';
import { AccordionTrigger } from '@/components/Accordion';
import { AccordionContent } from '@/components/Accordion';

const meta = {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: { control: 'boolean' },
    defaultActiveItems: { control: 'object' },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleItem: Story = {
  args: {
    allowMultiple: false,
    defaultActiveItems: ['item-1'],
    children: (
      <AccordionItem value="item-1">
        <AccordionTrigger value="item-1">Item 1</AccordionTrigger>
        <AccordionContent value="item-1">Content for Item 1</AccordionContent>
      </AccordionItem>
    ),
  },
};

export const MultipleItems: Story = {
  args: {
    allowMultiple: true,
    defaultActiveItems: ['item-1', 'item-2'],
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger value="item-1">Item 1</AccordionTrigger>
          <AccordionContent value="item-1">Content for Item 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger value="item-2">Item 2</AccordionTrigger>
          <AccordionContent value="item-2">Content for Item 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger value="item-3">Item 3</AccordionTrigger>
          <AccordionContent value="item-3">Content for Item 3</AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};
