import React from 'react';
import { FaArrowLeft, FaArrowRight, FaEye, FaSync, FaBook, FaWrench } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa6';
import { FiGrid, FiSliders } from 'react-icons/fi';

const iconMap = {
  arrowLeft: FaArrowLeft,
  arrowRight: FaArrowRight,
  eye: FaEye,
  sync: FaSync,
  book: FaBook,
  graph: FaChartLine,
  grid: FiGrid,
  wrench: FaWrench,
  slider: FiSliders,
};

const Icon = ({ name, style, size = 20, color, className }) => {
  const Component = iconMap[name];
  return (
    <Component
      style={style}
      size={size}
      color={color}
      className={className}
    />
  );
};

export default Icon;
