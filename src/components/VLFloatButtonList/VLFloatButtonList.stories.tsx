import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import VLFloatButtonList from './VLFloatButtonList';
import { PlusOutlined, DeleteOutlined, WarningOutlined, CheckOutlined } from '@ant-design/icons';

const meta: Meta<typeof VLFloatButtonList> = {
  title: 'Components/VLFloatButtonList',
  component: VLFloatButtonList,
  parameters: {
    docs: {
      description: { component: 'List/stack of square floating buttons (vertical or horizontal).' },
    },
  },
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal'],
      },
      description: 'Layout direction of the button list.',
      table: {
        type: { summary: "'vertical' | 'horizontal'" },
        defaultValue: { summary: 'vertical' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof VLFloatButtonList>;

const commonList = [
  {
    icon: <PlusOutlined />,
    color: 'primary',
    tooltip: 'Add new item',
    onClick: () => alert('Add'),
  },
  {
    icon: <DeleteOutlined />,
    color: 'danger',
    tooltip: 'Delete item',
    onClick: () => alert('Delete'),
  },
  {
    icon: <WarningOutlined />,
    color: 'warning',
    tooltip: 'Warning message',
    onClick: () => alert('Warn'),
  },
  {
    icon: <CheckOutlined />,
    color: 'success',
    tooltip: 'Mark as done',
    onClick: () => alert('Done'),
  },
];

export const Vertical: Story = {
  args: { list: commonList, direction: 'vertical' },
  parameters: {
    docs: {
      description: { story: 'Vertical layout with tooltips positioned to the left' },
    },
  },
};

export const Horizontal: Story = {
  args: { list: commonList, direction: 'horizontal' },
  parameters: {
    docs: {
      description: { story: 'Horizontal layout with tooltips positioned to the top' },
    },
  },
};
