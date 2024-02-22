import React from 'react';

const SelectLabel = ({ color, Icon, text }) => {
  return (
    <div className={`flex items-center space-x-2 text-${color}`}>
      {Icon && <Icon className="text-xl" />}
      <span>{text}</span>
    </div>
  );
};

export default SelectLabel;
