import type { Meta, StoryObj } from "@storybook/react";
import { ButtonMobileStore } from "@/components/ButtonMobileStore"; // Adjust the import path accordingly

const meta = {
    title: "Components/ButtonMobileStore",
    component: ButtonMobileStore,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        type: {
            control: "radio",
            options: ["appStore", "googlePlay", "appGallery"],
        },
        lang: {
            control: "select",
            options: ["EN", "ES", "FR", "DE", "IT", "JA", "KO", "ZH", "RU"],
        },
        alt: {
            control: "text",
        },
        darkTheme: {
            control: "boolean",
        },
        href: {
            control: "text",
        },
    },
} satisfies Meta<typeof ButtonMobileStore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppStoreDark: Story = {
    args: {
        type: "appStore",
        lang: "EN",
        alt: "Download on the App Store",
        darkTheme: true,
        href: "https://www.apple.com/app-store/",
    },
};

export const GooglePlayLight: Story = {
    args: {
        type: "googlePlay",
        lang: "ES",
        alt: "Descargar en Google Play",
        darkTheme: false,
        href: "https://play.google.com/store",
    },
};

export const AppGalleryFrench: Story = {
    args: {
        type: "appGallery",
        lang: "FR",
        alt: "Télécharger depuis AppGallery",
        darkTheme: true,
        href: "https://appgallery.huawei.com/",
    },
};
