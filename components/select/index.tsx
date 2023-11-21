import React from "react";
import { StyledSelect } from "@/components/select/styles";

interface ISelect {
  filter: string;
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const CustomSelect: React.FC<ISelect> = ({ filter, handleFilter, options }) => {
  return (
    <StyledSelect value={filter} onChange={(e) => handleFilter(e)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default CustomSelect;
