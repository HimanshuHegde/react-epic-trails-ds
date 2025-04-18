import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@/components/Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => (
        <Tabs>
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Settings</Tab>
                <Tab>Profile</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>Welcome to the Overview panel.</TabPanel>
                <TabPanel>Here you can change your settings.</TabPanel>
                <TabPanel>Update your profile information here.</TabPanel>
            </TabPanels>
        </Tabs>
    ),
};