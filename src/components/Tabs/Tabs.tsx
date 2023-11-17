// Tabs.tsx

import React, { useState, ReactNode } from 'react';
import './Tabs.css';

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>;

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {children.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {tab.props.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {children[activeTab].props.children}
      </div>
    </div>
  );
};

export { Tabs, Tab };
