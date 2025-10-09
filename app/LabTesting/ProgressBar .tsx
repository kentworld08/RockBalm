import React from "react";

interface PlayingProgressBarProps {
  progress: number; // value between 0–100
}

const PlayingProgressBar: React.FC<PlayingProgressBarProps> = ({
  progress,
}) => {
  return (
    <div className="relative w-full">
      {/* Track */}
      <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
        {/* Filled portion */}
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Moving circle (thumb) */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full transition-all duration-300"
        style={{
          left: `calc(${progress}% - 8px)`,
          boxShadow: "0 0 8px 4px rgba(255, 255, 255, 0.4)",
        }}
      ></div>
    </div>
  );
};

export default PlayingProgressBar;
