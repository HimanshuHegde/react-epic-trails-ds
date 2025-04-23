import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Collapse } from "@/components/Collapse";
import { fn } from "@storybook/test";

const meta: Meta<typeof Collapse> = {
    title: "Components/Collapse",
    component: Collapse,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        badges: { control: "object" },
        expanded: { control: "boolean" },
        defaultExpanded: { control: "boolean" },
        actionButtonLabel: { control: "text" },
        actionFunction: { action: "actionFunction triggered" },
        children: { control: "text" },
    },
    args: {
        onChange: fn(),
        actionFunction: fn(),
    }
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Playground: Story = {
    args: {
        label: "Click to Expand",
        badges: ["New", "Hot"],
        expanded: false,
        actionButtonLabel: "Do Something",
        children: "This is the collapsible content inside the component.",
    },
};

export const Default: Story = {
    render: (args) => (
        <Collapse label="Default Collapse" {...args}>
            Here is some hidden content that appears when expanded.
        </Collapse>
    ),
};

export const WithBadges: Story = {
    render: (args) => (
        <Collapse label="Collapse with Badges" badges={["Beta", "v2.3"]}>
            Content with badge display.
        </Collapse>
    ),
};

export const WithActionButton: Story = {
    args:{
        label:"Collapse with Action",
        actionButtonLabel:"Take Action",
        actionFunction:() => alert("Action button clicked!")
    },
    render: (args) => (
        <Collapse
            {...args}
        >
            Actionable content area.
        </Collapse>
    ),
};

export const InitiallyExpanded: Story = {
    args:{
        label:"Expanded on Load",
        defaultExpanded:true
    },
    render: (args) => (
        <Collapse {...args}>
            This starts open.
        </Collapse>
    ),
};
