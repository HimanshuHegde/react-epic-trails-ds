import React from "react";
import { InfoIcon } from "@/components/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { BadgeList, BadgeListItem } from "@/components/BadgeList";

const meta: Meta = {
    title: "Components/BadgeList",
    component: BadgeList,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <BadgeList>
            <BadgeListItem icon={<InfoIcon />} color="blue" size="normal">
                Default Badge
            </BadgeListItem>
            <BadgeListItem icon={<InfoIcon />} color="green" size="small">
                Small Green Badge
            </BadgeListItem>
            <BadgeListItem icon={<InfoIcon />} color="red" size="large">
                Large Red Badge
            </BadgeListItem>
            <BadgeListItem
                icon={<InfoIcon />}
                color="orange"
                size="normal"
                as="a"
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Clickable Badge (Link)
            </BadgeListItem>
        </BadgeList>
    ),
};
