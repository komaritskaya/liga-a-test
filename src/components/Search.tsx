import React, {createRef, RefObject} from 'react';
import styled from 'styled-components';

interface SearchProps {
  handleSearchChange: (value: string) => void;
};

const Input = styled.input`
  width: 100%;
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px;
  font-size: 16px;
`;

const Search: React.FC<SearchProps> = ({handleSearchChange}) => {
  const inputRef: RefObject<HTMLInputElement> | undefined = createRef();
  
  const handleChange = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (inputRef.current) {
      handleSearchChange(inputRef.current.value);
    }
  };

  return (
    <Input placeholder="Search..." type="text" name="search" id="search" ref={inputRef} onChange={handleChange} />
  );
};

export default Search;