import React from 'react';
import VLFloatButton, { VLFloatButtonProps } from '../VLFloatButton';
import './VLFloatButtonList.scss';

export interface VLFloatButtonListProps {
  list: VLFloatButtonProps[];
  direction: 'vertical' | 'horizontal';
}

/**
 * A positioned container that lays out float buttons in a column or row.
 * Keeps API minimal; positioning defaults to bottom-right like a typical FAB stack.
 */
const VLFloatButtonList: React.FC<VLFloatButtonListProps> = ({ list, direction }) => {
  const getTooltipPlacement = (direction: 'vertical' | 'horizontal'): 'top' | 'left' => {
    return direction === 'vertical' ? 'left' : 'top';
  };

  const tooltipPlacement = getTooltipPlacement(direction);

  return (
    <div
      className={`vl-fab-list vl-fab-list--${direction}`}
      role="toolbar"
      aria-label="Floating actions"
    >
      {list.map((item, idx) => (
        <VLFloatButton
          key={idx}
          icon={item.icon}
          color={item.color}
          tooltip={item.tooltip}
          tooltipPlacement={item.tooltipPlacement || tooltipPlacement}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default VLFloatButtonList;
