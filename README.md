# VL Float Buttons

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.27.1-blue.svg)](https://ant.design/)
[![Storybook](https://img.shields.io/badge/Storybook-9.1.3-blue.svg)](https://storybook.js.org/)

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd vl-demo

# Install dependencies
npm install

# Start development server
npm start

# Run Storybook
npm run storybook

# Build for production
npm run build
```

## 🚀 Quick Start

```tsx
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import VLFloatButtonList from './components/VLFloatButtonList';

function App() {
  const buttons = [
    {
      icon: <PlusOutlined />,
      color: 'primary',
      tooltip: 'Add new item',
      onClick: () => console.log('Add clicked')
    },
    {
      icon: <PlusOutlined />,
      color: '#ff4757',
      tooltip: 'Custom red action',
      onClick: () => console.log('Custom red clicked')
    }
  ];

  return (
    <VLFloatButtonList
      list={buttons}
      direction="vertical"
    />
  );
}

export default App;
```

## 📚 Components

### VLFloatButton

Single floating action button with extensive customization options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ReactNode` | - | Icon to display in the button (required) |
| `color` | `'primary' \| 'danger' \| 'warning' \| 'success' \| hex string` | `'primary'` | Button background color |
| `tooltip` | `string` | - | Tooltip text to display on hover |
| `tooltipPlacement` | `TooltipPlacement` | `'top'` | Position of the tooltip |
| `onClick` | `() => void` | - | Click handler function (required) |

#### Tooltip Placement Options

- `'top'`, `'left'`, `'right'`, `'bottom'`
- `'topLeft'`, `'topRight'`, `'bottomLeft'`, `'bottomRight'`
- `'leftTop'`, `'leftBottom'`, `'rightTop'`, `'rightBottom'`

### VLFloatButtonList

Container component for arranging multiple floating action buttons.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `list` | `VLFloatButtonProps[]` | - | Array of button configurations (required) |
| `direction` | `'vertical' \| 'horizontal'` | - | Layout direction for buttons (required) |

## 🎨 Color System

### Predefined Colors

| Color | Hex Value | Usage |
|-------|-----------|-------|
| `primary` | `#0097D999` | Primary actions, main CTA |
| `danger` | `#FF695E99` | Delete, remove, destructive actions |
| `warning` | `#FF9A0399` | Warnings, cautions |
| `success` | `#18C07D99` | Success states, confirmations |

### Custom Hex Colors

Support for any valid hex color:

```tsx
<VLFloatButton
  icon={<PlusOutlined />}
  color="#ff4757" // Custom red
  tooltip="Custom color"
/>

<VLFloatButton
  icon={<PlusOutlined />}
  color="#3742fa" // Custom blue
  tooltip="Another custom color"
/>
```

## 🏗️ Architecture

### File Structure

```
src/
├── components/
│   ├── VLFloatButton/
│   │   ├── VLFloatButton.tsx       # Main component
│   │   ├── VLFloatButton.scss      # Component styles
│   │   └── VLFloatButton.stories.tsx # Storybook stories
│   └── VLFloatButtonList/
│       ├── VLFloatButtonList.tsx
│       ├── VLFloatButtonList.scss
│       └── VLFloatButtonList.stories.tsx
├── styles/
│   ├── _variables.scss             # Design tokens
│   ├── _mixins.scss               # Reusable SCSS mixins
│   └── globals.scss               # Global styles
└── types/                        # TypeScript type definitions
```

## 🧪 Development

### Available Scripts

```bash
# Development server
npm start

# Storybook development
npm run storybook

# Production build
npm run build

# Code quality checks
npm run lint
npm run format
```

### Storybook

The library includes comprehensive Storybook documentation:

```bash
npm run storybook
```

Navigate to `http://localhost:6006` to explore:
- All component variants
- Interactive controls
- Documentation and usage examples
- Visual testing

## 🎨 Design System

### Color Palette

All colors use **60% opacity** for better visual hierarchy:

```scss
$color-primary: #0097d999;  // Blue
$color-danger: #ff695e99;   // Red
$color-warning: #ff9a0399;  // Orange
$color-success: #18c07d99;  // Green
```