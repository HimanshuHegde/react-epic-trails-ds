import React, { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

// Table root component
export const Table = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLTableElement>) => {
    return (
        <div
            className={clsx("overflow-x-auto rounded-lg shadow-sm bg-gray-50", className)}
            {...props}
        >
            <table className="min-w-full text-sm table-auto border-separate border-spacing-0">
                {children}
            </table>
        </div>
    );
};

// TableHeader
export const TableHeader = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
    return (
        <thead
            className={clsx("bg-gray-400 text-zinc-200", className)}
            {...props}
        >
            {children}
        </thead>
    );
};

// TableBody
export const TableBody = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
    return (
        <tbody className={clsx("text-zinc-500", className)} {...props}>
            {children}
        </tbody>
    );
};

// TableFooter
export const TableFooter = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
    return (
        <tfoot
            className={clsx("bg-gray-400 text-zinc-200", className)}
            {...props}
        >
            {children}
        </tfoot>
    );
};

// TableRow
export const TableRow = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLTableRowElement>) => {
    return (
        <tr
            className={clsx(
                "border-b border-zinc-700 transition-colors duration-200 hover:bg-gray-200 rounded-lg",
                className
            )}
            {...props}
        >
            {children}
        </tr>
    );
};

// TableHead
export const TableHead = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLTableHeaderCellElement>) => {
    return (
        <th
            className={clsx(
                "py-3 px-4 text-left text-sm font-semibold text-black uppercase tracking-wider",
                className
            )}
            {...props}
        >
            {children}
        </th>
    );
};

// TableCell
export const TableCell = ({
    children,
    className,
    colSpan,
    ...props
}: HTMLAttributes<HTMLTableCellElement> & { colSpan?: number }) => {
    return (
        <td
            className={clsx("py-3 px-4 text-sm text-black", className)}
            colSpan={colSpan}
            {...props}
        >
            {children}
        </td>
    );
};
