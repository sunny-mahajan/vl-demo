import type { Preview } from '@storybook/react';

import 'antd/dist/reset.css';
import '../src/styles/globals.scss';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default preview;
