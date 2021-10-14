import React, { useState } from "react";
import { chakra, Image, Tooltip } from "@chakra-ui/react";
import { useData } from "../../contexts/DataContext";
import tokIcon from "../../tokIcon.png";
import {
  QuestionOutlineIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import { PopupModal } from "../PopupModal/PopupModal";

export const DataList = () => {
  let data = useData();
  const [openModalNumber, setOpenModalNumber] = useState(null);
  const DataContainer = chakra("div", {
    baseStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: "100%",
      marginBottom: "20px",
    },
  });

  const DataBox = chakra("div", {
    baseStyle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      height: "4rem",
      cursor: "pointer",
      boxShadow: "rgb(96 97 112 / 16%) 0px 1px 1px 0px",
      borderRadius: "10px",
      fontSize: "sm",
      minWidth: "100%",
    },
  });

  const BlueIndicator = chakra("div", {
    baseStyle: {
      marginTop: "2px",
      marginRight: "5px",
      w: "8px",
      h: "8px",
      borderRadius: "50px",
      background: "rgb(46, 162, 248)",
    },
  });

  const YellowIndicator = chakra("div", {
    baseStyle: {
      marginTop: "2px",
      marginRight: "5px",
      w: "8px",
      h: "8px",
      borderRadius: "50px",
      background: "rgb(255, 220, 0)",
    },
  });

  const RedIndicator = chakra("div", {
    baseStyle: {
      marginTop: "2px",
      marginRight: "5px",
      w: "8px",
      h: "8px",
      borderRadius: "50px",
      background: "rgb(249, 83, 89)",
    },
  });

  const toggleModal = (blockNumber) => {
    const newBlockNumber = openModalNumber === blockNumber ? null : blockNumber;
    setOpenModalNumber(newBlockNumber);
  };

  const { datas } = data;
  return (
    <div>
      {datas?.map((data) => {
        return (
          <DataContainer>
            <DataBox onClick={() => toggleModal(data.blockNumber)}>
              <chakra.div
                display="flex"
                alignItems="center"
                paddingLeft="10px"
                width="280px"
              >
                {data.saleClosed ? <BlueIndicator /> : <YellowIndicator />}
                <Image
                  src={tokIcon}
                  alt="Tokamak Network Icon"
                  height="50px"
                  padding="0px 10px"
                />
                <chakra.p fontWeight="bold">{data.name}</chakra.p>
              </chakra.div>
              <chakra.div
                display="flex"
                alignItems="center"
                paddingLeft="10px"
                width="150px"
              >
                <chakra.p color="subText" paddingRight="7px">
                  Period
                </chakra.p>{" "}
                {data.period}
              </chakra.div>
              <chakra.div
                display="flex"
                alignItems="center"
                justifyContent="center"
                paddingLeft="10px"
                width="200px"
              >
                <chakra.p color="subText" paddingRight="7px">
                  Total Staked
                </chakra.p>
                {data.totalStakedAmount / 1000000000000000000}
              </chakra.div>
              <chakra.div
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                paddingLeft="10px"
                width="261px"
              >
                <chakra.div display="flex">
                  <chakra.p color="subText" paddingRight="7px">
                    Earning per TON
                  </chakra.p>
                  <chakra.p paddingRight="7px">{data.earningPerTon}</chakra.p>
                </chakra.div>
                <Tooltip
                  label="This estimator can change depending on the situation"
                  hasArrow
                  arrowSize={10}
                  placement="left"
                >
                  <QuestionOutlineIcon />
                </Tooltip>
              </chakra.div>
              <chakra.div
                paddingRight="20px"
                color="blue.500"
                width="200px"
                textAlign="right"
              >
                {openModalNumber === data.blockNumber ? (
                  <TriangleUpIcon />
                ) : (
                  <TriangleDownIcon />
                )}
              </chakra.div>
            </DataBox>
            {openModalNumber === data.blockNumber ? (
              <PopupModal data={data} />
            ) : null}
          </DataContainer>
        );
      })}
    </div>
  );
};
