import { ReactElement } from 'react';

export default function Divider(): ReactElement {
  return (
    <div className="flex items-center justify-center my-1">
      <div className="border-t border-gray-400 w-full" style={{ maxWidth: 'calc(50% - 20px)' }}></div>
      <span className="px-4 text-sky-200 text-sm">✦</span>
      <div className="border-t border-gray-400 w-full" style={{ maxWidth: 'calc(50% - 20px)' }}></div>
    </div>
  );
};