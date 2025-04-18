import React, { useState, useRef, useEffect } from 'react';
import { CloseCircle } from '../icons';

type SelectInputProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readonly?: boolean;
  className?: string;
};

export default function InputSelect({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  readonly = false,
  className = '',
}: SelectInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update search term when value changes externally
  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readonly) {
      setSearchTerm(e.target.value);
      setIsOpen(true);
    }
  };

  const handleOptionSelect = (option: string) => {
    onChange(option);
    setSearchTerm(option);
    setIsOpen(false);
  };

  const clearSelection = () => {
    onChange('');
    setSearchTerm('');
    inputRef.current?.focus();
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={() => setIsOpen(true)}
          placeholder={placeholder}
          readOnly={readonly}
          className="w-full bg-[#e8e8e8] p-[8px] placeholder:text-inputPlaceholder outline-none pr-[40px] border-[3px]"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={clearSelection}
            className="absolute right-2 text-gray-500 hover:text-gray-700 flex justify-center"
          >
            <CloseCircle height='20px' width='20px'/>
          </button>
        )}
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-[#e8e8e8] border border-gray-300  shadow-lg max-h-60 overflow-y-auto"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No options found</div>
          )}
        </div>
      )}
    </div>
  );
}