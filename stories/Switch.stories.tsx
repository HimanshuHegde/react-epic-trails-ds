import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/components/Switch";
import { useState } from "react";
import { Moon, Sunny } from "@/components/icons";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    className: { control: "text" },
    onChange: { action: "toggled" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

// 📌 Default Switch
export const Default: Story = {
  args: {
    checked: false,
  },
};

// ✅ Checked by default
export const Checked: Story = {
  args: {
    checked: true,
  },
};

// 🚫 Disabled Switch
export const Disabled: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

// 🌗 With Custom Icon
export const WithIcon: Story = {
  args: {
    checked: true,
    icon: <Moon className="w-4 h-4 text-white" />,
  },
};

// 🎛️ Controlled Switch with State
export const Controlled: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return (
      <div className="flex items-center gap-4 text-white">
        <Switch
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          icon={enabled ? <Sunny className="w-4 h-4 text-yellow-300" /> : <Moon className="w-4 h-4 text-blue-500" />}
        />
        <span>{enabled ? "On" : "Off"}</span>
      </div>
    );
  },
};
