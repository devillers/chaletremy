import React, { useState } from 'react';
import { Cabine } from '../font';

const Accordion = ({ title, description, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className={`${Cabine.className}w-full text-left p-4 focus:outline-none flex items-center`}
        onClick={toggleAccordion}
      >
        <h3 className={`${Cabine.className} text-[12px] tracking-wide ml-2`}>
          {title}
        </h3>
        <p
          className={`${Cabine.className} text-[10px] text-pink-900 uppercase tracking-wide ml-2`}
        >
          {description}
        </p>
        <span
          className={`${Cabine.className} text-[30px] ml-4 font-thin text-pink-600`}
        >
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
