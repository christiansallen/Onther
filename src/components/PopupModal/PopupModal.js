import React from "react";
import {
  chakra,
  Text,
  Heading,
  SimpleGrid,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tooltip,
  Divider,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import moment from "moment";

export const PopupModal = (props) => {
  const { data } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dateFormat = "MMMM DD YYYY, H:mm:ss";

  const datePassed =
    moment().format(dateFormat) <
    moment(data.miningCloseDate).format(dateFormat);

  const ModalBox = chakra("div", {
    baseStyle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      height: "430px",
      boxShadow: "rgb(96 97 112 / 16%) 0px 1px 1px 0px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      minWidth: "100%",
      padding: "70px",
    },
  });

  const ModalColumn = chakra("div", {
    baseStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "215px",
      height: "100%",
    },
  });

  const ColumnItem = chakra("div", {
    baseStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
    },
  });

  const CenterModalContainer = chakra("div", {
    baseStyle: {
      width: "450px",
      height: "100%",
    },
  });

  const CenterModal = chakra("div", {
    baseStyle: {
      width: "100%",
      marginInline: "auto",
      padding: "3rem",
      maxWidth: "var(--chakra-sizes-sm)",
      paddingInline: "1rem",
      boxShadow: "var(--chakra-shadows-md)",
      borderRadius: "var(--chakra-radii-lg)",
      border: "1px solid rgb(244, 246, 248)",
      height: "100%",
      textAlign: "center",
    },
  });

  const CenterModalData = chakra("div", {
    baseStyle: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const truncate = (fullStr, strLen) => {
    if (fullStr?.length <= strLen) return fullStr;
    const separator = "...";
    const sepLen = separator.length;
    const charsToShow = strLen - sepLen;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);

    return (
      fullStr?.substr(0, frontChars) +
      separator +
      fullStr?.substr(fullStr.length - backChars)
    );
  };

  return (
    <ModalBox>
      <ModalColumn>
        <ColumnItem>
          <Text fontSize="sm" color="subText">
            Mining Starting Day
          </Text>
          <Text fontSize="lg" color="black" fontWeight="semibold">
            Sep 08, 2021 20:10:01
          </Text>
          <Text fontSize="xs" color="subText">
            Block Num. {data?.startBlock}
          </Text>
        </ColumnItem>
        <ColumnItem>
          <Text fontSize="sm" color="subText">
            Total Stakers
          </Text>
          <Text fontSize="lg" color="black" fontWeight="semibold">
            {data?.totalStakers}
          </Text>
        </ColumnItem>
        <ColumnItem>
          <Text fontSize="sm" color="subText">
            My Staked
          </Text>
          <Text fontSize="lg" color="black" fontWeight="semibold">
            -
          </Text>
        </ColumnItem>
      </ModalColumn>
      <CenterModalContainer>
        <CenterModal>
          <CenterModalData>
            <Heading as="h2" size="xl" color="#2B72E4" width="100%">
              {" "}
              TON{" "}
            </Heading>
            <Text color="subText" padding="1rem 0" width="100%">
              Available in Wallet
            </Text>
            <SimpleGrid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)"
              gap={5}
              width="100%"
            >
              <Box
                as="button"
                disabled={datePassed}
                background="gray.100"
                padding=".5rem"
                borderRadius="5px"
                _disabled={{
                  cursor: "not-allowed",
                  color: "gray.500",
                  opacity: ".5",
                }}
                value="Stake"
                onClick={(e) => console.log(e.target.value)}
              >
                Stake
              </Box>
              <Box
                as="button"
                disabled={datePassed}
                background="gray.100"
                padding=".5rem"
                borderRadius="5px"
                _disabled={{
                  cursor: "not-allowed",
                  color: "gray.500",
                  opacity: ".5",
                }}
                value="Unstake"
                onClick={(e) => console.log(e.target.value)}
              >
                Unstake
              </Box>
              <Box
                as="button"
                disabled={datePassed}
                background="gray.100"
                padding=".5rem"
                borderRadius="5px"
                _disabled={{
                  cursor: "not-allowed",
                  color: "gray.500",
                  opacity: ".5",
                }}
                value="Claim"
                onClick={(e) => console.log(e.target.value)}
              >
                Claim
              </Box>
              <Box
                as="button"
                disabled={datePassed}
                background={!datePassed ? "#2B72E4" : "gray.100"}
                color={!datePassed && "white"}
                padding=".5rem"
                borderRadius="5px"
                _disabled={{
                  cursor: "not-allowed",
                  color: "gray.500",
                  opacity: ".5",
                }}
                value="Manage"
                onClick={(e) => {
                  datePassed ? console.log(e.target.value) : onOpen();
                }}
              >
                {datePassed ? "End Sale" : "Manage"}
              </Box>
            </SimpleGrid>

            <Modal
              isCentered
              onClose={onClose}
              isOpen={isOpen}
              motionPreset="slideInBottom"
            >
              <ModalOverlay />
              <ModalContent width="350px">
                <chakra.div
                  display="flex"
                  flexDirection="column"
                  marginBottom="2rem"
                >
                  <ModalHeader
                    textAlign="center"
                    fontSize="1.6rem"
                    paddingBottom="0"
                  >
                    Manage
                  </ModalHeader>
                  <chakra.p color="subText" textAlign="center" fontSize=".8rem">
                    {`You can manage ${data.name} Product`}
                  </chakra.p>
                </chakra.div>
                <ModalCloseButton
                  style={{
                    width: "34px",
                    height: "34px",
                    right: "calc(var(--chakra-space-8) * -1)",
                    top: "calc(var(--chakra-space-8) * -1)",
                    cursor: "pointer",
                    borderRadius: "50%",
                    color: "white",
                    background: "black",
                    opacity: "0.7",
                  }}
                />
                <Divider />
                <ModalBody textAlign="center">
                  <chakra.div display="flex" flexDirection="column">
                    <chakra.div display="flex" flexDirection="column">
                      <Text
                        fontSize="xs"
                        color="blue.500"
                        padding="1.5rem 0 .5rem"
                      >
                        Available Balance
                      </Text>
                      <Text fontSize="2xl" transform="scale(.9, 1)">
                        0.00 TON
                      </Text>
                    </chakra.div>
                    <chakra.div display="flex" flexDirection="column">
                      <chakra.div
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        height="55px"
                      >
                        <Text color="subText" fontSize="sm">
                          Total Staked
                        </Text>
                        <chakra.p>0.00 TON</chakra.p>
                      </chakra.div>
                      <chakra.div
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        height="55px"
                      >
                        <Text color="subText" fontSize="sm">
                          Staked in Layer 2
                        </Text>
                        <chakra.p>0.00 TON</chakra.p>
                      </chakra.div>
                      <chakra.div
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        height="55px"
                      >
                        <Text color="subText" fontSize="sm">
                          Seigniorage
                        </Text>
                        <chakra.p>0.00 TON</chakra.p>
                      </chakra.div>
                      <chakra.div
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        height="55px"
                      >
                        <chakra.div display="flex" alignItems="center">
                          <Text color="subText" fontSize="sm" marginRight="5px">
                            Pending UnStaked in Layer 2
                          </Text>
                          <Tooltip
                            label="TON will be withdrawn at block ..."
                            hasArrow
                            arrowSize={10}
                            placement="top"
                          >
                            <QuestionOutlineIcon />
                          </Tooltip>
                        </chakra.div>
                        <chakra.p>0.00 TON</chakra.p>
                      </chakra.div>
                      <chakra.div
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        height="55px"
                      >
                        <chakra.div display="flex" alignItems="center">
                          <Text color="subText" fontSize="sm" marginRight="5px">
                            Available to swap
                          </Text>
                          <Tooltip
                            label="You can swap using seig TON"
                            hasArrow
                            arrowSize={10}
                            placement="top"
                          >
                            <QuestionOutlineIcon fontWeight="hairline" />
                          </Tooltip>
                        </chakra.div>
                        <chakra.p>0.00 TON</chakra.p>
                      </chakra.div>
                      <chakra.div
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        height="55px"
                      >
                        <Text color="subText" fontSize="sm">
                          Swapped TOS
                        </Text>
                        <chakra.p>0.00 TON</chakra.p>
                      </chakra.div>
                    </chakra.div>
                  </chakra.div>
                  <Divider marginBottom="1rem" />
                  <SimpleGrid
                    templateColumns="repeat(2, 1fr)"
                    templateRows="repeat(2, 1fr)"
                    gap={5}
                    width="100%"
                    marginBottom="1rem"
                  >
                    <Box
                      as="button"
                      disabled={datePassed}
                      background="gray.100"
                      borderRadius="5px"
                      height="40px"
                      fontSize="xs"
                      _disabled={{
                        cursor: "not-allowed",
                        color: "gray.500",
                        opacity: ".5",
                      }}
                      value="Stake"
                      onClick={(e) => console.log(e.target.value)}
                    >
                      Stake in Layer 2
                    </Box>
                    <Box
                      as="button"
                      disabled={datePassed}
                      background="gray.100"
                      borderRadius="5px"
                      height="40px"
                      fontSize="xs"
                      _disabled={{
                        cursor: "not-allowed",
                        color: "gray.500",
                        opacity: ".5",
                      }}
                      value="Unstake"
                      onClick={(e) => console.log(e.target.value)}
                    >
                      Unstake from Layer 2
                    </Box>
                    <Box
                      as="button"
                      disabled={datePassed}
                      background="gray.100"
                      borderRadius="5px"
                      height="40px"
                      fontSize="xs"
                      _disabled={{
                        cursor: "not-allowed",
                        color: "gray.500",
                        opacity: ".5",
                      }}
                      value="Withdraw"
                      onClick={(e) => console.log(e.target.value)}
                    >
                      Withdraw
                    </Box>
                    <Box
                      as="button"
                      disabled={datePassed}
                      background="gray.100"
                      borderRadius="5px"
                      height="40px"
                      fontSize="xs"
                      _disabled={{
                        cursor: "not-allowed",
                        color: "gray.500",
                        opacity: ".5",
                      }}
                      value="Swap"
                      onClick={(e) => console.log(e.target.value)}
                    >
                      Swap
                    </Box>
                  </SimpleGrid>
                </ModalBody>
              </ModalContent>
            </Modal>
          </CenterModalData>
        </CenterModal>
      </CenterModalContainer>
      <ModalColumn>
        <ColumnItem>
          <Text fontSize="sm" color="subText">
            Mining Closing Day
          </Text>
          <Text fontSize="lg" color="black" fontWeight="semibold">
            {data.miningCloseDate}
          </Text>
          <Text fontSize="xs" color="subText">
            Block Num. {data?.endBlock}
          </Text>
        </ColumnItem>
        <ColumnItem>
          <Text fontSize="sm" color="subText">
            Contract
          </Text>
          <Text fontSize="lg" color="black" fontWeight="semibold">
            {truncate(data?.stakeContract, 14)}
          </Text>
        </ColumnItem>
        <ColumnItem>
          <Text fontSize="sm" color="subText">
            Earned TOS
          </Text>
          <Text fontSize="lg" color="black" fontWeight="semibold">
            -
          </Text>
        </ColumnItem>
      </ModalColumn>
    </ModalBox>
  );
};
