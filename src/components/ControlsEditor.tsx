import React from 'react';
import { useConfig } from '../context/ConfigContext';
import Slider from './common/Slider';

export default function ControlsEditor() {
  const { config, updateConfig } = useConfig();

  return (
    <section className="bg-[#1d1d1f] rounded-3xl p-8 text-white">
      <h2 className="text-3xl font-bold mb-8">Controls Settings</h2>
      
      <div className="space-y-6">
        <Slider
          label="Mouse Sensitivity"
          value={config.sensitivity}
          onChange={(value) => updateConfig({ sensitivity: value })}
          min={0.1}
          max={10}
          step={0.1}
        />

        <Slider
          label="Zoom Sensitivity"
          value={config.zoomSensitivity}
          onChange={(value) => updateConfig({ zoomSensitivity: value })}
          min={0.1}
          max={10}
          step={0.1}
        />

        <div>
          <h3 className="text-xl font-semibold mb-4">Key Bindings</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(config.keyBindings).map(([action, key]) => (
              <div key={action} className="flex items-center justify-between">
                <span className="text-sm">{action}</span>
                <button
                  className="bg-[#2d2d2f] px-4 py-2 rounded-lg"
                  onClick={() => {/* Key binding logic */}}
                >
                  {key}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}