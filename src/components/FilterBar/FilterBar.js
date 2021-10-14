import React, { useState, useRef } from "react";
import { FilterDropdown } from "./FilterDropdown/FilterDropdown";
import { Indicators } from "./Indicators/Indicators";
import { chakra } from "@chakra-ui/react";

export const FilterBar = () => {
  const Wrapper = chakra("div", {
    baseStyle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
  });

  return (
    <Wrapper>
      <Indicators />
      <FilterDropdown />
    </Wrapper>
  );
};
