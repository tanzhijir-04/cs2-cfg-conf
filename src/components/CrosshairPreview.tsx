import React from 'react';
import { useConfig } from '../context/ConfigContext';

export default function CrosshairPreview() {
  const { config } = useConfig();

  return (
    <div className="relative w-full aspect-[16/9] bg-[#2d2d2f] rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative"
          style={{
            opacity: config.opacity,
            '--crosshair-color': config.color,
            '--crosshair-thickness': `${config.thickness}px`,
            '--crosshair-gap': `${config.gap}px`,
          } as React.CSSProperties}
        >
          {/* Crosshair rendering based on style */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Implement crosshair visualization here */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-sm text-gray-400">
        1280 × 720
      </div>
    </div>
  );
}