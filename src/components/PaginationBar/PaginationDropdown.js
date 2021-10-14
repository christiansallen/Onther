import React from "react";
import { Select } from "@chakra-ui/react";
import { usePagination, useSetPagination } from "../../contexts/DataContext";

export const PaginationDropdown = () => {
  const setPagination = useSetPagination();
  const pagination = usePagination();
  const paginationOptions = [
    { text: "Show 10", value: 10 },
    { text: "Show 20", value: 20 },
    { text: "Show 30", value: 30 },
    { text: "Show 40", value: 40 },
    { text: "Show 50", value: 50 },
  ];

  return (
    <Select
      size="sm"
      onChange={(e) => setPagination(e.target.value)}
      width="135px"
      borderRadius="5px"
      value={pagination}
    >
      {paginationOptions.map((option) => {
        return (
          <option size="sm" value={option.value}>
            {option.text}
          </option>
        );
      })}
    </Select>
  );
};
