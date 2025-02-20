import React, { ChangeEvent } from 'react';
import { StyledSearchBar } from './SearchBar.styled';
interface SearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <StyledSearchBar
      type="text"
      placeholder="Search for artists or songs..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
