import React from 'react';
import { FloatButton } from 'antd';
import './VLFloatButton.scss';

/**
 * Single floating action button built on top of Ant Design FloatButton.
 * - Always square shaped per requirement.
 * - Applies custom background color if provided (60% opacity supported by hex).
 * - Shows tooltip string if provided.
 */
export interface VLFloatButton {
  onClick: () => void;
  icon: React.ReactNode;
  color?: 'primary' | 'danger' | 'warning' | 'success' | `#${string}` | string; // predefined colors or custom hex colors, defaults to 'primary'
  tooltip?: string; // simple string tooltip
  tooltipPlacement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom'; // tooltip placement, defaults to 'top'
}

export interface VLFloatButtonProps extends VLFloatButton {
  // Keep room for future extension without altering the core interface
}

const VLFloatButton: React.FC<VLFloatButtonProps> = ({
  onClick,
  icon,
  color,
  tooltip,
  tooltipPlacement = 'top',
}) => {

  const finalColor = color || 'primary';

  // Check if it's a predefined color name
  const isPredefinedColor = ['primary', 'danger', 'warning', 'success'].includes(finalColor);

  // Use appropriate class based on color type
  const wrapperClass = isPredefinedColor
    ? `vl-float-button-wrapper vl-color-${finalColor}`
    : 'vl-float-button-wrapper vl-custom-color';

  return (
    <div
      className={wrapperClass}
      style={
        !isPredefinedColor ? ({ '--vl-custom-bg': finalColor } as React.CSSProperties) : undefined
      }
    >
      <FloatButton
        shape="square"
        icon={icon}
        onClick={onClick}
        tooltip={tooltip ? { title: tooltip, placement: tooltipPlacement } : undefined}
      />
    </div>
  );
};

export default VLFloatButton;
