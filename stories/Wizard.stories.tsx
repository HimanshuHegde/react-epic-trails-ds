import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Wizard, WizardStep, WizardNavigation } from "@/components/Wizard";

const meta: Meta<typeof Wizard> = {
    title: "Components/Wizard",
    component: Wizard,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Wizard>;

export const FullWizardFlow: Story = {
    args: {
        initialActiveStep: 2,
        initialCompletedSteps: 2,
        id: "wizard",
    },
    render: (args) => (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <Wizard {...args}>
                <WizardStep title="Search">
                    <div>Search content goes here</div>
                </WizardStep>
                <WizardStep title="Passenger details">
                    <div>Passenger details content goes here</div>
                </WizardStep>
                <WizardStep title="Ticket fare">
                    <div>Ticket fare content goes here</div>
                </WizardStep>
                <WizardStep title="Customize your trip">
                    <div>Customize your trip content goes here</div>
                </WizardStep>
                <WizardStep title="Kiwi.com guarantee">
                    <div>Kiwi.com guarantee content goes here</div>
                </WizardStep>
                <WizardStep title="Seating">
                    <div>Seating content goes here</div>
                </WizardStep>
                <WizardStep title="Overview & payment">
                    <div>Overview & payment content goes here</div>
                </WizardStep>
                <WizardNavigation />
            </Wizard>
        </div>
    ),
};
