import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import {
  useData,
  useSetData,
  useSetPageNumber,
} from "../../../contexts/DataContext";
import { mockData } from "../../../mockData";

export const FilterDropdown = (props) => {
  const [filters] = useState([
    "On Sale Sort",
    "Name",
    "Period",
    "Total Staked",
    "Earnings Per TON",
  ]);
  const data = useData();
  const setData = useSetData();
  const setPageNumber = useSetPageNumber();
  const dataLength = data.datas.length;

  const filterChange = (e) => {
    setPageNumber(1);
    let dataCopy = mockData.datas;
    const filter = e.target.value;
    if (filter === "Name") {
      dataCopy.sort((a, b) => (a.name < b.name ? 1 : -1));
      setData({ ...data, datas: dataCopy.slice(0, dataLength) });
    } else if (filter === "Period") {
      // sort by period, if period is equal, then sort by 'startBlock'.
      dataCopy.sort((a, b) =>
        a.period < b.period
          ? 1
          : a.period === b.period
          ? a.startBlock < b.startBlock
            ? 1
            : -1
          : -1
      );
      setData({ ...data, datas: dataCopy.slice(0, dataLength) });
    } else if (filter === "Total Staked") {
      dataCopy.sort((a, b) =>
        a.totalStakedAmount < b.totalStakedAmount ? 1 : -1
      );
      setData({ ...data, datas: dataCopy.slice(0, dataLength) });
    } else if (filter === "Earnings Per TON") {
      dataCopy.sort((a, b) => (a.earningPerTon < b.earningPerTon ? 1 : -1));
      setData({ ...data, datas: dataCopy.slice(0, dataLength) });
    } else {
      dataCopy.sort((a, b) =>
        // sort by saleClosed, if saleClosed is equal, then sort by 'startBlock'.
        a.saleClosed > b.saleClosed
          ? 1
          : a.saleClosed === b.saleClosed
          ? a.startBlock < b.startBlock
            ? 1
            : -1
          : -1
      );
      setData({ ...data, datas: dataCopy.slice(0, dataLength) });
    }
  };

  return (
    <Select
      size="sm"
      onChange={(e) => filterChange(e)}
      width="135px"
      borderRadius="5px"
    >
      {filters.map((filter) => {
        return (
          <option size="sm" value={filter}>
            {filter}
          </option>
        );
      })}
    </Select>
  );
};
