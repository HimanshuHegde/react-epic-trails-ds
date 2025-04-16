import React from "react";
import clsx from "clsx";

const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    style,
    ...rest
}) => {
    return (
        <div
            className={clsx("bg-zinc-700 animate-pulse", className)}
            style={style}
            {...rest}
        />
    );
};

export default Skeleton;
