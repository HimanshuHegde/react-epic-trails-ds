import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Timeline, TimelineStep } from "@/components/Timeline";

const meta: Meta<typeof Timeline> = {
    title: "Components/Timeline",
    component: Timeline,
    tags: ["autodocs"],
    argTypes: {
        className: { control: "text" },
        lineThickness: { control: "number" },
    },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
    args: {
        children: (
            <>
                <TimelineStep completed={true}>Step 1: Completed</TimelineStep>
                <TimelineStep current={true}>Step 2: Current</TimelineStep>
                <TimelineStep>Step 3: Upcoming</TimelineStep>
            </>
        ),
    },
};

export const CustomLineThickness: Story = {
    args: {
        lineThickness: 4,
        children: (
            <>
                <TimelineStep completed={true}>Step 1: Completed</TimelineStep>
                <TimelineStep current={true}>Step 2: Current</TimelineStep>
                <TimelineStep>Step 3: Upcoming</TimelineStep>
            </>
        ),
    },
};

export const WithCustomClass: Story = {
    args: {
        className: "bg-gray-800 text-white",
        children: (
            <>
                <TimelineStep completed={true}>Step 1: Completed</TimelineStep>
                <TimelineStep current={true}>Step 2: Current</TimelineStep>
                <TimelineStep>Step 3: Upcoming</TimelineStep>
            </>
        ),
    },
};
