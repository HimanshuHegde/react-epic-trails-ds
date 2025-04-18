import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import {
    Card,
    CardSection,
    CardClosable,
    CardWithActions,
    CardWithSections,
    CardWithExpandableSections,
    CardWithControlledAndUncontrolled,
    CardWithControlledWithControls,
    CardWithDefaultExpanded,
    CardWithMixedSections,
    LoadingCard,
} from "@/components/Card";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card>
            <p className="p-4">This is a basic card.</p>
        </Card>
    ),
};

export const Closable: Story = {
    render: () => (
        <CardClosable>
            <p className="p-4">You can close this card.</p>
        </CardClosable>
    ),
};

export const WithActions: Story = {
    render: () => (
        <CardWithActions
            actions={
                <button className="text-sm text-blue-400">Click Me</button>
            }
        >
            <p className="p-4">Card with action button.</p>
        </CardWithActions>
    ),
};

export const WithSections: Story = {
    render: () => (
        <CardWithSections>
            <CardSection title="Section 1">Content 1</CardSection>
            <CardSection title="Section 2">Content 2</CardSection>
        </CardWithSections>
    ),
};

export const ExpandableSections: Story = {
    render: () => (
        <CardWithExpandableSections>
            <CardSection title="Expandable Section" expandable>
                Expandable content
            </CardSection>
            <CardSection title="Fixed Section">
                Always visible content
            </CardSection>
        </CardWithExpandableSections>
    ),
};

export const ControlledAndUncontrolled: Story = {
    render: () => {
        const [expanded, setExpanded] = useState(true);

        return (
            <CardWithControlledAndUncontrolled>
                <CardSection title="Uncontrolled Section" expandable>
                    This section is uncontrolled.
                </CardSection>
                <CardSection
                    title="Controlled Section"
                    expandable
                    controlled
                    isExpanded={expanded}
                    onToggle={setExpanded}
                >
                    This section is controlled.
                </CardSection>
            </CardWithControlledAndUncontrolled>
        );
    },
};

export const WithDefaultExpanded: Story = {
    render: () => (
        <CardWithDefaultExpanded>
            <CardSection title="Expanded by Default" expandable defaultExpanded>
                This starts expanded.
            </CardSection>
        </CardWithDefaultExpanded>
    ),
};

export const WithMixedSections: Story = {
    render: () => (
        <CardWithMixedSections>
            <CardSection title="Expandable" expandable>
                Toggle me!
            </CardSection>
            <CardSection title="Always Open">Always shown section.</CardSection>
        </CardWithMixedSections>
    ),
};

export const Loading: Story = {
    render: () => (
        <LoadingCard>
            <p className="p-4">This will not be seen while loading.</p>
        </LoadingCard>
    ),
};
