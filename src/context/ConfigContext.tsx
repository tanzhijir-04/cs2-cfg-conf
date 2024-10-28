import React, { createContext, useContext, useState } from 'react';

interface Config {
  // Crosshair settings
  crosshairStyle: string;
  opacity: number;
  gap: number;
  thickness: number;
  color: string;
  centerDot: boolean;
  
  // Controls settings
  sensitivity: number;
  zoomSensitivity: number;
  keyBindings: Record<string, string>;
  
  // Video settings
  aspectRatio: string;
  resolution: string;
  displayMode: string;
}

const defaultConfig: Config = {
  crosshairStyle: 'classic',
  opacity: 1,
  gap: 3,
  thickness: 1,
  color: '#00ff00',
  centerDot: false,
  
  sensitivity: 2.5,
  zoomSensitivity: 1.0,
  keyBindings: {
    'Primary Attack': 'MOUSE1',
    'Secondary Attack': 'MOUSE2',
    'Jump': 'SPACE',
    'Duck': 'CTRL',
  },
  
  aspectRatio: '16:9',
  resolution: '1280x720',
  displayMode: 'fullscreen',
};

const ConfigContext = createContext<{
  config: Config;
  updateConfig: (updates: Partial<Config>) => void;
}>({
  config: defaultConfig,
  updateConfig: () => {},
});

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<Config>(defaultConfig);

  const updateConfig = (updates: Partial<Config>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}

export const useConfig = () => useContext(ConfigContext);