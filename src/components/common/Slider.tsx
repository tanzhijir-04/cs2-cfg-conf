import React from 'react';

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
}

export default function Slider({ label, value, onChange, min, max, step = 1 }: SliderProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium">{label}</label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-20 bg-[#2d2d2f] border border-[#3d3d3f] rounded px-2 py-1 text-right"
          min={min}
          max={max}
          step={step}
        />
      </div>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full h-2 bg-[#2d2d2f] rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
}