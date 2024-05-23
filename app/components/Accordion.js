import React, { useState } from 'react';
import { Cabine } from '../font';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h3 className={`${Cabine.className} text-[14px] ml-2`}>{title}</h3>
        <span className="text-2xl text-pink-600">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
