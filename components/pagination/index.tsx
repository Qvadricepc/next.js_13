import React, { Dispatch, SetStateAction } from "react";
import {
  PaginationButton,
  PaginationContainer,
} from "@/components/pagination/styles";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages?: number;
  onPageChange: Dispatch<SetStateAction<number>>;
}) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (totalPages) {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    }
  };

  return (
    <PaginationContainer>
      <PaginationButton onClick={handlePrevClick}>&#8592;</PaginationButton>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <PaginationButton onClick={handleNextClick}>&#8594;</PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
