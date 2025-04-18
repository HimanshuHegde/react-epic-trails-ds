import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dialogue } from "@/components/Dialogue";

const meta: Meta<typeof Dialogue> = {
    title: "Components/Dialogue",
    component: Dialogue,
    argTypes: {
        title: { control: "text" },
        description: { control: "text" },
        children: { control: "text" },
        image: { control: "text" },
        imagePosition: {
            control: "select",
            options: ["up", "down", ""],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dialogue>;

export const Playground: Story = {
    args: {
        title: "Welcome to Dialogue",
        description: "This is a customizable dialog box component.",
        image: <img src="https://via.placeholder.com/150" alt="placeholder" />,
        imagePosition: "up",
        children: "Here you can place any content inside the dialogue.",
    },
};

export const ImageUp: Story = {
    render: () => (
        <Dialogue
            title="Image at Top"
            description="This dialogue has its image at the top."
            image={
                <img src="https://via.placeholder.com/150" alt="Top Image" />
            }
            imagePosition="up"
        >
            Content inside the dialogue
        </Dialogue>
    ),
};

export const ImageDown: Story = {
    render: () => (
        <Dialogue
            title="Image at Bottom"
            description="The image appears below the content."
            image={
                <img src="https://via.placeholder.com/150" alt="Bottom Image" />
            }
            imagePosition="down"
        >
            Here’s some middle content between title/desc and image.
        </Dialogue>
    ),
};

export const NoImage: Story = {
    render: () => (
        <Dialogue title="Simple Dialogue" description="No image is shown here.">
            Only text-based content inside the dialogue.
        </Dialogue>
    ),
};
