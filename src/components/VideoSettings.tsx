import React from 'react';
import { useConfig } from '../context/ConfigContext';

const aspectRatios = [
  { id: '16:9', name: '16:9' },
  { id: '4:3', name: '4:3' },
  { id: '19:10', name: '19:10' },
];

const displayModes = [
  { id: 'fullscreen', name: 'Fullscreen' },
  { id: 'windowed', name: 'Windowed' },
  { id: 'borderless', name: 'Borderless Fullscreen' },
];

const resolutions = [
  { id: '1920x1080', name: '1920 × 1080' },
  { id: '1280x720', name: '1280 × 720' },
  { id: '1024x768', name: '1024 × 768' },
];

export default function VideoSettings() {
  const { config, updateConfig } = useConfig();

  return (
    <section className="bg-[#1d1d1f] rounded-3xl p-8 text-white">
      <h2 className="text-3xl font-bold mb-8">Video Settings</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Aspect Ratio</label>
          <select 
            className="w-full bg-[#2d2d2f] border border-[#3d3d3f] rounded-lg p-2"
            value={config.aspectRatio}
            onChange={(e) => updateConfig({ aspectRatio: e.target.value })}
          >
            {aspectRatios.map((ratio) => (
              <option key={ratio.id} value={ratio.id}>{ratio.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Resolution</label>
          <select 
            className="w-full bg-[#2d2d2f] border border-[#3d3d3f] rounded-lg p-2"
            value={config.resolution}
            onChange={(e) => updateConfig({ resolution: e.target.value })}
          >
            {resolutions.map((resolution) => (
              <option key={resolution.id} value={resolution.id}>{resolution.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Display Mode</label>
          <select 
            className="w-full bg-[#2d2d2f] border border-[#3d3d3f] rounded-lg p-2"
            value={config.displayMode}
            onChange={(e) => updateConfig({ displayMode: e.target.value })}
          >
            {displayModes.map((mode) => (
              <option key={mode.id} value={mode.id}>{mode.name}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}