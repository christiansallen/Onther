import React, { useEffect, useState } from "react";
import { PaginationDropdown } from "./PaginationDropdown";
import { chakra, Box, Text, IconButton } from "@chakra-ui/react";
import {
  useData,
  useSetData,
  usePagination,
  usePageNumber,
  useSetPageNumber,
} from "../../contexts/DataContext";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { mockData } from "../../mockData";

export const PaginationBar = () => {
  const Wrapper = chakra("div", {
    baseStyle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
  });

  const data = useData();
  const setData = useSetData();
  const pagination = usePagination();
  const pageNumber = usePageNumber();
  const setPageNumber = useSetPageNumber();
  const dataLength = mockData.datas.length;
  const startPage = 1;
  const [endPage, setEndPage] = useState(Math.ceil(dataLength / pagination));

  useEffect(() => {
    let newEndPage = Math.ceil(dataLength / pagination);
    if (pageNumber > newEndPage) {
      setPageNumber(1);
    }
    setEndPage(newEndPage);
    setData({ ...data, datas: getPaginatedData() });
  }, [pagination, pageNumber]);

  const updatePageNum = (value) => {
    if (value === "increase") {
      setPageNumber(pageNumber + 1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const getPaginatedData = () => {
    let dataCopy = mockData.datas;
    const startIndex = pageNumber * Number(pagination) - Number(pagination);
    const endIndex = startIndex + Number(pagination);
    return dataCopy.slice(startIndex, endIndex);
  };

  return (
    <Wrapper>
      <Box
        disabled
        as="button"
        background="gray.100"
        padding=".5rem"
        borderRadius="5px"
        _disabled={{
          cursor: "not-allowed",
          color: "gray.500",
          opacity: ".5",
        }}
        value="Withdraw & Swap"
        onClick={(e) => console.log(e.target.value)}
      >
        <Text fontWeight="semibold">Withdraw & Swap</Text>
      </Box>
      <chakra.div display="flex" alignItems="center">
        <IconButton
          aria-label="Search database"
          icon={<ChevronLeftIcon />}
          margin="0 5px"
          size="sm"
          onClick={() => updatePageNum("decrease")}
          disabled={pageNumber <= startPage}
        />
        <chakra.div display="flex">
          Page{" "}
          <Text color="blue.500" p="0 3px">
            {pageNumber}
          </Text>{" "}
          of{" "}
          <Text fontWeight="semibold" p="0 3px">
            {endPage}
          </Text>
        </chakra.div>
        <IconButton
          aria-label="Search database"
          icon={<ChevronRightIcon />}
          margin="0 5px"
          size="sm"
          onClick={() => updatePageNum("increase")}
          disabled={pageNumber >= endPage}
        />
        <PaginationDropdown />
      </chakra.div>
    </Wrapper>
  );
};
