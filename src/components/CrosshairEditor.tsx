import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useConfig } from '../context/ConfigContext';
import Slider from './common/Slider';
import CrosshairPreview from './CrosshairPreview';

const crosshairStyles = [
  { id: 'classic', name: 'Classic' },
  { id: 'default', name: 'Default' },
  { id: 'dynamic', name: 'Dynamic' },
];

export default function CrosshairEditor() {
  const { config, updateConfig } = useConfig();
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <section className="bg-[#1d1d1f] rounded-3xl p-8 text-white">
      <h2 className="text-3xl font-bold mb-8">Crosshair Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Style</label>
            <select 
              className="w-full bg-[#2d2d2f] border border-[#3d3d3f] rounded-lg p-2"
              value={config.crosshairStyle}
              onChange={(e) => updateConfig({ crosshairStyle: e.target.value })}
            >
              {crosshairStyles.map((style) => (
                <option key={style.id} value={style.id}>{style.name}</option>
              ))}
            </select>
          </div>

          <Slider
            label="Opacity"
            value={config.opacity}
            onChange={(value) => updateConfig({ opacity: value })}
            min={0}
            max={1}
            step={0.1}
          />

          <Slider
            label="Gap"
            value={config.gap}
            onChange={(value) => updateConfig({ gap: value })}
            min={0}
            max={10}
          />

          <Slider
            label="Thickness"
            value={config.thickness}
            onChange={(value) => updateConfig({ thickness: value })}
            min={0.5}
            max={5}
            step={0.5}
          />

          <div className="relative">
            <label className="block text-sm font-medium mb-2">Color</label>
            <button
              className="w-full h-10 rounded-lg border border-[#3d3d3f]"
              style={{ backgroundColor: config.color }}
              onClick={() => setShowColorPicker(!showColorPicker)}
            />
            {showColorPicker && (
              <div className="absolute z-10 mt-2">
                <HexColorPicker
                  color={config.color}
                  onChange={(color) => updateConfig({ color })}
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <CrosshairPreview />
          <div className="mt-4 space-y-4">
            <button
              className="w-full bg-[#0071e3] text-white rounded-lg py-2 px-4 hover:bg-[#0077ed]"
              onClick={() => {/* Export config logic */}}
            >
              Export Config
            </button>
            <button
              className="w-full bg-[#2d2d2f] text-white rounded-lg py-2 px-4 hover:bg-[#3d3d3f]"
              onClick={() => {/* Import config logic */}}
            >
              Import Config
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}