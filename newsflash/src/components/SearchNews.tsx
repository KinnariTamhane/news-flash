import React from 'react';

type SearchNewsProps = {
  onSearchChange: (query: string) => void;
};

const SearchNews: React.FC<SearchNewsProps> = ({ onSearchChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search news..."
      onChange={handleChange}
      className='border rounded-xl border-b-gray-400 px-3 py-2 mt-8 block w-full h-1/2 outline-0 focus:border-blue-400 ' 
    />
  );
};

export default SearchNews;