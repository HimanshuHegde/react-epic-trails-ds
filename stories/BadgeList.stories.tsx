import type { Meta, StoryObj } from "@storybook/react";
import { BadgeList, BadgeListItem } from "@/components/BadgeList";

const meta = {
    title: "Components/BadgeList",
    component: BadgeList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof BadgeList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    render: () => (
        <BadgeList>
            <BadgeListItem>Default Badge</BadgeListItem>
            <BadgeListItem color="green">Green Badge</BadgeListItem>
            <BadgeListItem color="red">Red Badge</BadgeListItem>
        </BadgeList>
    ),
    args: {} as any,
};

export const WithSizes: Story = {
    render: () => (
        <BadgeList>
            <BadgeListItem size="small" color="gray">
                Small
            </BadgeListItem>
            <BadgeListItem size="normal" color="blue">
                Normal
            </BadgeListItem>
            <BadgeListItem size="large" color="orange">
                Large
            </BadgeListItem>
        </BadgeList>
    ),
    args: {} as any,
};

export const AsAnchor: Story = {
    render: () => (
        <BadgeList>
            <BadgeListItem as="a" href="https://example.com" color="lightBlue">
                Clickable Badge
            </BadgeListItem>
        </BadgeList>
    ),
    args: {} as any,
};

export const WithIcons: Story = {
    render: () => (
        <BadgeList>
            <BadgeListItem icon={<span>🎯</span>} color="blue">
                Target
            </BadgeListItem>
            <BadgeListItem icon={<span>⚡</span>} color="green">
                Fast
            </BadgeListItem>
        </BadgeList>
    ),
    args: {} as any,
};
