import React from "react";
import { Header } from "../Header/Header";
import { FilterBar } from "../FilterBar/FilterBar";
import { DataList } from "../DataList/DataList";
import { PaginationBar } from "../PaginationBar/PaginationBar";
import { DataProvider } from "../../contexts/DataContext";
import "./StakingPage.scss";

export const StakingPage = () => {
  return (
    <div className="staking-page-container">
      <DataProvider>
        <Header />
        <FilterBar />
        <DataList />
        <PaginationBar />
      </DataProvider>
    </div>
  );
};
