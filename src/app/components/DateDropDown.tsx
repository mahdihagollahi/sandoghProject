import { useState } from 'react';

interface DropdownProps {
    onSelectYear: (year: string) => void;
  }

const Dropdown: React.FC<DropdownProps> = ({ onSelectYear }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string>('سال ۱۴۰۳');
  const years = ['۱۴۰۳', '۱۴۰۲', '۱۴۰۱', '۱۴۰۰'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectYear = (year:string) => {
    setSelectedYear(`سال ${year}`);
    onSelectYear(year); 
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-right">
      <button
        onClick={toggleDropdown}
        className="bg-teal-400 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-between w-36"
      >
        <span>{selectedYear}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          {years.map((year) => (
            <li
              key={year}
              onClick={() => handleSelectYear(year)}
              className="cursor-pointer px-4 py-2 hover:bg-teal-100"
            >
              {`سال ${year}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
