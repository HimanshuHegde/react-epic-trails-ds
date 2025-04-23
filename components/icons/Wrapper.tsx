"use client";

import { useEffect } from "react";
import { loadIonicons } from "./utils";

export function WrapperIcon(props: any) {
    useEffect(() => {
        loadIonicons();
    }, []);
    return <ion-icon aria-label={props.name || "icon"} {...props}></ion-icon>;
}
