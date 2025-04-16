import React, { useState, useRef, useCallback } from 'react';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
}) => {
  const [sliderValue, setSliderValue] = useState(value);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleDrag = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const percent = Math.min(Math.max(0, (clientX - rect.left) / rect.width), 1);
      const newValue = Math.round((min + percent * (max - min)) / step) * step;
      setSliderValue(newValue);
      onChange?.(newValue);
    },
    [min, max, step, onChange]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDrag(e.clientX);
    const handleMouseMove = (e: MouseEvent) => handleDrag(e.clientX);
    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const percentage = ((sliderValue - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md px-4">
      <div
        ref={trackRef}
        className="relative h-2 bg-zinc-800 rounded-full shadow-inner cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute h-full bg-zinc-300 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full w-5 h-5 bg-white border-2 border-zinc-900 shadow-md transition-all"
          style={{ left: `calc(${percentage}% - 10px)` }}
        />
      </div>
      <div className="mt-2 text-center text-sm text-zinc-300">
        Value: {sliderValue}
      </div>
    </div>
  );
};

export default Slider;
