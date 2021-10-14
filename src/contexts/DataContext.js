import React, { useState, useContext, createContext } from "react";
import { mockData } from "../mockData";

const DataContext = createContext();
const UpdateDataContext = createContext();
const PaginationContext = createContext();
const UpdatePaginationContext = createContext();
const PageNumberContext = createContext();
const UpdatePageNumberContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const useSetData = () => {
  return useContext(UpdateDataContext);
};

export const usePagination = () => {
  return useContext(PaginationContext);
};

export const useSetPagination = () => {
  return useContext(UpdatePaginationContext);
};

export const usePageNumber = () => {
  return useContext(PageNumberContext);
};

export const useSetPageNumber = () => {
  return useContext(UpdatePageNumberContext);
};

export const DataProvider = ({ children }) => {
  const [testData, setTestData] = useState(mockData);
  const [pagination, setPagination] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <DataContext.Provider value={testData}>
      <UpdateDataContext.Provider value={setTestData}>
        <PaginationContext.Provider value={pagination}>
          <UpdatePaginationContext.Provider value={setPagination}>
            <PageNumberContext.Provider value={pageNumber}>
              <UpdatePageNumberContext.Provider value={setPageNumber}>
                {children}
              </UpdatePageNumberContext.Provider>
            </PageNumberContext.Provider>
          </UpdatePaginationContext.Provider>
        </PaginationContext.Provider>
      </UpdateDataContext.Provider>
    </DataContext.Provider>
  );
};
