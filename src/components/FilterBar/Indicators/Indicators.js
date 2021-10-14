import React, { useState } from "react";
import { chakra, Text } from "@chakra-ui/react";

export const Indicators = () => {
  const [indicators] = useState([
    { text: "On Sale", color: "rgb(249, 83, 89)" },
    { text: "Started", color: "rgb(255, 220, 0)" },
    { text: "Ended", color: "rgb(46, 162, 248)" },
  ]);
  return (
    <chakra.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {indicators.map((indicator) => {
        return (
          <chakra.div
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginRight="20px"
          >
            <chakra.div
              marginTop="2px"
              marginRight="5px"
              w="8px"
              h="8px"
              borderRadius="50px"
              background={indicator.color}
            />
            <Text fontSize="xs">{indicator.text}</Text>
          </chakra.div>
        );
      })}
    </chakra.div>
  );
};
