import { ReactElement, useState } from 'react';

interface TabProps {
  label: string;
  children: React.ReactNode;
}

export default function Tabs({ children }: { children: ReactElement<TabProps>[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-4 border-b">
        {children.map((child, index) => (
          <button
            key={index}
            className={`pb-2 ${
              index === activeTab ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="pt-4">{children[activeTab]}</div>
    </div>
  );
}
