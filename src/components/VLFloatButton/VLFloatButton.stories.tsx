import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import VLFloatButton from './VLFloatButton';
import { PlusOutlined } from '@ant-design/icons';

const meta: Meta<typeof VLFloatButton> = {
  title: 'Components/VLFloatButton',
  component: VLFloatButton,
  parameters: {
    docs: {
      description: { component: 'Single square floating button built on AntD FloatButton.' },
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'text',
      },
      description:
        'Button color. Supports predefined colors (primary, danger, warning, success) or custom hex colors (e.g., #ff0000, #0080ff).',
      table: {
        type: { summary: "'primary' | 'danger' | 'warning' | 'success' | hex string" },
        defaultValue: { summary: 'primary' },
      },
    },
    tooltipPlacement: {
      control: {
        type: 'select',
        options: [
          'top',
          'left',
          'right',
          'bottom',
          'topLeft',
          'topRight',
          'bottomLeft',
          'bottomRight',
          'leftTop',
          'leftBottom',
          'rightTop',
          'rightBottom',
        ],
      },
      description: 'Position of the tooltip relative to the button.',
      table: {
        type: { summary: 'tooltip placement' },
        defaultValue: { summary: 'top' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof VLFloatButton>;

export const Default: Story = {
  args: {
    icon: <PlusOutlined />,
    tooltip: 'Default (Primary) color',
    onClick: () => alert('Default clicked'),
  },
};

export const HexColor: Story = {
  args: {
    icon: <PlusOutlined />,
    color: '#ff0000',
    tooltip: 'Custom red hex color',
    onClick: () => alert('Red hex clicked'),
  },
};
