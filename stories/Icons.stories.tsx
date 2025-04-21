import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { InfoIcon } from "@/components/icons";
import { WarningIcon } from "@/components/icons";
import { Checkbox } from "@/components/icons";
import { Close } from "@/components/icons";

type IconProps = {
  size?: string;
  color?: string;
  height?: string;
  width?: string;
};

// Metadata
const meta: Meta<IconProps> = {
  title: "Components/Icons",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "text",
      defaultValue: "2em",
    },
    color: {
      control: "color",
      defaultValue: "#333333",
    },
    height: {
      control: "text",
      defaultValue: "",
    },
    width: {
      control: "text",
      defaultValue: "",
    },
  },
};

export default meta;
type Story = StoryObj<IconProps>;

const IconGrid: React.FC<IconProps> = ({ size, color, height, width }) => {
  const commonProps = { size, color, height, width };

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
      <div>
        <InfoIcon {...commonProps} />
        <p className="mt-2 text-sm">InfoIcon</p>
      </div>
      <div>
        <WarningIcon {...commonProps} />
        <p className="mt-2 text-sm">WarningIcon</p>
      </div>
      <div>
        <Checkbox {...commonProps} />
        <p className="mt-2 text-sm">Checkbox</p>
      </div>
      <div>
        <Close {...commonProps} />
        <p className="mt-2 text-sm">Close</p>
      </div>
    </div>
  );
};

// Main story
export const FewIcons: Story = {
  render: (args) => <IconGrid {...args} />,
};
