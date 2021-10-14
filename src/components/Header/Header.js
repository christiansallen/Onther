import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="staking-page-header-section">
      <Heading as="h1" size="xl" marginBottom="10px">
        Staking
      </Heading>
      <Text fontSize="md" color="subText">
        Put your tokens into TONStarter and earn rewards without losing
        principal
      </Text>
      <Text fontSize="sm" fontWeight="500" color="subText">
        TON base unit principal
      </Text>
    </div>
  );
};
