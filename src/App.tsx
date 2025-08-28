import React from 'react';
import { PlusOutlined, DeleteOutlined, WarningOutlined, CheckOutlined } from '@ant-design/icons';
import VLFloatButtonList from './components/VLFloatButtonList';

function App() {
  const list = [
    {
      icon: <PlusOutlined />,
      color: 'primary',
      tooltip: 'Add (Primary)',
      onClick: () => alert('Add clicked'),
    },
    {
      icon: <DeleteOutlined />,
      color: '#ff4757',
      tooltip: 'Delete (Hex Red)',
      onClick: () => alert('Delete clicked'),
    },
    {
      icon: <WarningOutlined />,
      color: '#ffa502',
      tooltip: 'Warn (Hex Orange)',
      onClick: () => alert('Warn clicked'),
    },
    {
      icon: <CheckOutlined />,
      color: '#7bed9f',
      tooltip: 'Done (Hex Green)',
      onClick: () => alert('Done clicked'),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>VL Float Buttons Demo</h1>
        <p>Use Storybook for comprehensive examples.</p>
      </header>
      <VLFloatButtonList list={list} direction="vertical" />
    </div>
  );
}

export default App;
