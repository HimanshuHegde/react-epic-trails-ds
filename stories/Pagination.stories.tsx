import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@/components/Pagination";

const meta: Meta<typeof Pagination> = {
    title: "Components/Pagination",
    component: Pagination,
    tags: ["autodocs"],
    argTypes: {
        pageCount: {
            control: { type: "number", min: 1 },
            description: "Total number of pages",
            defaultValue: 5,
        },
        currentPage: {
            control: { type: "number", min: 1 },
            description: "The currently active page",
            defaultValue: 1,
        },
        labelPrev: {
            control: "text",
            description: "Text for the previous button",
            defaultValue: "Previous",
        },
        labelNext: {
            control: "text",
            description: "Text for the next button",
            defaultValue: "Next",
        },
        theme: {
            control: { type: "select" },
            options: ["primary", "secondary"],
            description: "Color theme of pagination",
            defaultValue: "primary",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    render: (args) => {
        const [currentPage, setCurrentPage] = useState(args.currentPage);

        return (
            <div className="p-4">
                <Pagination
                    {...args}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                />
                <p className="mt-4 text-sm text-gray-400">
                    Current Page: {currentPage}
                </p>
            </div>
        );
    },
    args: {
        pageCount: 5,
        currentPage: 1,
        labelPrev: "Previous",
        labelNext: "Next",
        theme: "primary",
    },
};
