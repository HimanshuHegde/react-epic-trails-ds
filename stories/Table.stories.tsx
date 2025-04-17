import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    TableFooter,
} from "@/components/Table";

const meta: Meta<typeof Table> = {
    title: "Components/Table",
    component: Table,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
    render: () => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Jane Doe</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>Admin</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>John Smith</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>User</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ),
};

export const WithFooter: Story = {
    render: () => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Apples</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>$5</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Oranges</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>$3</TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell>$8</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    ),
};

export const EmptyState: Story = {
    render: () => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell
                        colSpan={2}
                        className="text-center italic text-zinc-500"
                    >
                        No users found.
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ),
};
