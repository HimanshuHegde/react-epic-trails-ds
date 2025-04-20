import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs, BreadcrumbsItem } from "@/components/Breadcrumbs";

const meta = {
    title: "Components/Breadcrumbs",
    component: Breadcrumbs,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        direction: {
            control: { type: "radio" },
            options: ["ltr", "rtl"],
        },
        separator: {
            control: false, // Separator is typically a ReactNode
        },
        onGoBack: { action: "goBack" },
    },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Breadcrumbs {...args}>
            <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
            <BreadcrumbsItem href="#">Library</BreadcrumbsItem>
            <BreadcrumbsItem>Current</BreadcrumbsItem>
        </Breadcrumbs>
    ),
    args: {} as any,
};

export const WithCustomSeparator: Story = {
    render: (args) => (
        <Breadcrumbs separator="👉" {...args}>
            <BreadcrumbsItem href="#">Dashboard</BreadcrumbsItem>
            <BreadcrumbsItem href="#">Projects</BreadcrumbsItem>
            <BreadcrumbsItem>Alpha</BreadcrumbsItem>
        </Breadcrumbs>
    ),
    args: {} as any,
};

export const RTL: Story = {
    render: (args) => (
        <Breadcrumbs direction="rtl" {...args}>
            <BreadcrumbsItem href="#">בית</BreadcrumbsItem>
            <BreadcrumbsItem href="#">ספריה</BreadcrumbsItem>
            <BreadcrumbsItem>נוכחי</BreadcrumbsItem>
        </Breadcrumbs>
    ),
    args: {} as any,
};

export const WithClickHandlers: Story = {
    render: (args) => (
        <Breadcrumbs onGoBack={() => alert("Going back!")} {...args}>
            <BreadcrumbsItem onClick={() => alert("Home clicked")}>
                Home
            </BreadcrumbsItem>
            <BreadcrumbsItem onClick={() => alert("Docs clicked")}>
                Docs
            </BreadcrumbsItem>
            <BreadcrumbsItem>Reference</BreadcrumbsItem>
        </Breadcrumbs>
    ),
    args: {} as any,
};
