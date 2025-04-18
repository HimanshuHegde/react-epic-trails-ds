import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Collapse } from "@/components/Collapse";

const meta: Meta<typeof Collapse> = {
    title: "Components/Collapse",
    component: Collapse,
    argTypes: {
        label: { control: "text" },
        badge: { control: "object" },
        expanded: { control: "boolean" },
        actionButtonLabel: { control: "text" },
        actionFunction: { action: "actionFunction triggered" },
        children: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Playground: Story = {
    args: {
        label: "Click to Expand",
        badge: ["New", "Hot"],
        expanded: false,
        actionButtonLabel: "Do Something",
        children: "This is the collapsible content inside the component.",
    },
};

export const Default: Story = {
    render: () => (
        <Collapse label="Default Collapse">
            Here is some hidden content that appears when expanded.
        </Collapse>
    ),
};

export const WithBadges: Story = {
    render: () => (
        <Collapse label="Collapse with Badges" badge={["Beta", "v2.3"]}>
            Content with badge display.
        </Collapse>
    ),
};

export const WithActionButton: Story = {
    render: () => (
        <Collapse
            label="Collapse with Action"
            actionButtonLabel="Take Action"
            actionFunction={() => alert("Action button clicked!")}
        >
            Actionable content area.
        </Collapse>
    ),
};

export const InitiallyExpanded: Story = {
    render: () => (
        <Collapse label="Expanded on Load" expanded>
            This starts open.
        </Collapse>
    ),
};
