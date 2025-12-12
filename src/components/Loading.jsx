import { useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  useEffect(() => {
    // Animation will be handled by CSS keyframes
    // No need for state management
  }, []);

  // 7 dots arranged in a tight circular cluster (no center dot)
  // All dots are at equal distance from center, forming a circle
  const radius = 18; // Distance from center for final position
  const initialRadius = 35; // Starting distance for rotation
  const dotPositions = [
    // 7 dots evenly spaced around a circle (no center dot)
    { x: 50, y: 50 - radius, angle: 0 }, // Top
    { x: 50 + radius * 0.7818, y: 50 - radius * 0.6235, angle: 51.43 }, // Top-right
    { x: 50 + radius * 0.9749, y: 50 + radius * 0.2225, angle: 102.86 }, // Right
    { x: 50 + radius * 0.4339, y: 50 + radius * 0.9010, angle: 154.29 }, // Bottom-right
    { x: 50 - radius * 0.4339, y: 50 + radius * 0.9010, angle: 205.71 }, // Bottom-left
    { x: 50 - radius * 0.9749, y: 50 + radius * 0.2225, angle: 257.14 }, // Left
    { x: 50 - radius * 0.7818, y: 50 - radius * 0.6235, angle: 308.57 }, // Top-left
  ];

  return (
    <div className="loading-container">
      <div className="loading-logo chrome-style">
        {/* Teal C-shaped arcs */}
        <div className="arc-container">
          <div className="arc arc-left"></div>
          <div className="arc arc-right"></div>
        </div>

        {/* White inner circle */}
        <div className="inner-circle"></div>

        {/* 7 Dots - Chrome style rotation and formation */}
        <div className="dots-container">
          {dotPositions.map((pos, index) => (
            <div
              key={index}
              className="dot chrome-dot"
              style={{
                '--final-x': `${pos.x}%`,
                '--final-y': `${pos.y}%`,
                '--angle': `${pos.angle}deg`,
                '--index': index,
                '--initial-radius': `${initialRadius}%`,
                '--final-radius': `${radius}%`,
                animationDelay: `${index * 0.05}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
