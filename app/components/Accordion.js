import React, { useState } from 'react';
import { Cabine } from '../font';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        className={`${Cabine.className}w-full text-left p-4 focus:outline-none flex items-center`}
        onClick={toggleAccordion}
      >
        <h3 className={`${Cabine.className} text-[14px] tracking-wide ml-2`}>
          {title}
        </h3>
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
