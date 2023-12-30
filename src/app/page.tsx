"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Skeleton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { buttonsData } from "./data";
import { useState } from "react";
import Title from "@/Components/Title";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";
import useTransactionData from "./Hooks/verifyTransaction";

export default function Page() {
  const { isLoading } = useLoading();
  const { responseText, setResponseText } = useResponse();
  const {
    transactionData,
    setTransactionData,
    transactionData3,
    handleBankTagsChange,
    handleBankAddressTagsChange,
    setTransactionData2x,
    setTransactionData2z,
    handleTransacntion3,
    handleBankAddress,
    transactionData2z,
    handleTransacntion4,
    transactionData2,
    transactionData2x,
    paymentMethod,
    transactionData4,
    handlePaymentMethodChange,
  } = useTransactionData();
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const FloatingButton = () => (
    <Button
      position="fixed"
      bottom="4"
      right={{ base: "30%", sm: "40%" }}
      left={{ base: "30%", sm: "40%" }}
      size="lg"
      isLoading={isLoading}
      loadingText="Submitting"
      colorScheme="teal"
      borderRadius="full"
      boxShadow="md"
      onClick={() => {
        console.log(transactionData2x);
      }}
    >
      Submit
    </Button>
  );
  const buttonHeight = useBreakpointValue({
    xl: "45px",
    sm: "65px",
  });

  // CARD
  const { CARD } = transactionData2.originPaymentDetails;
  const { nameOnCard, CardExpiry, merchantDetails, tags: cardTags } = CARD;
  // GENERIC_BANK_ACCOUNT
  const { GENERIC_BANK_ACCOUNT } = transactionData2x.originPaymentDetails;
  const { bankAddress, tags: bankAccountTags } = GENERIC_BANK_ACCOUNT;
  const { tags: bankAddressTags } = GENERIC_BANK_ACCOUNT.bankAddress;
  // IBAN
  const { IBAN } = transactionData2z.originPaymentDetails;
  const { bankAddress: bankAddressIban, tags: tagsIban } = IBAN;

  return (
    <>
      <Container maxW="100%" bg={"grey"} pt={4} pb={20}>
        <Title />
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={4}
          justify="center"
          align="stretch"
        >
          <Container
            centerContent
            w={{ base: "100%", md: "20%" }}
            maxW={{ base: "100%", md: "2xl" }}
            bg={"black.100"}
            pb={8}
            borderRadius={10}
          >
            <Heading pt={4}>Actions</Heading>
            {buttonsData.map((item, index) => (
              <Button
                w={{ base: "100%", md: "100%", lg: "100%" }}
                h={buttonHeight}
                mt={index === 0 ? { base: 12, md: 6 } : { base: 6, md: 4 }}
                key={index}
                isDisabled={isLoading}
                overflow="hidden"
                whiteSpace={{ base: "normal", md: "normal" }}
                textOverflow="ellipsis"
                backgroundColor={
                  selectedButton === index ? "green.500" : "white"
                }
                color={selectedButton === index ? "white" : "black"}
              >
                {item.label}
              </Button>
            ))}
          </Container>
          <Container
            centerContent
            w={{ base: "100%", md: "45%" }}
            bg={"black.200"}
            pb={8}
            borderRadius={10}
          >
            <Heading pt={4}>judul</Heading>
            {Object.keys(transactionData).map((key, index) => (
              <Box w={"full"} key={index} mt={4}>
                <FormLabel>{key}</FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  value={(transactionData as any)[key]}
                  onChange={(e) =>
                    setTransactionData({
                      ...transactionData,
                      [key]: e.target.value,
                    })
                  }
                  disabled={isLoading}
                />
              </Box>
            ))}
            {Object.keys(transactionData3).map((key) => (
              <Box w={"full"} key={key}>
                <Heading pt={4}>{key}</Heading>
                {Object.keys((transactionData3 as any)[key]).map((subKey) => (
                  <FormControl w={"full"} key={subKey} mt={4}>
                    <FormLabel>{subKey}</FormLabel>
                    <Input
                      bg={"white"}
                      type="text"
                      value={(transactionData3 as any)[key][subKey]}
                      onChange={(e) =>
                        handleTransacntion3(key, subKey, e.target.value)
                      }
                      disabled={isLoading}
                    />
                  </FormControl>
                ))}
              </Box>
            ))}
            {transactionData4.tags.map((tag, index) => (
              <Box w={"full"} key={index}>
                <Heading pt={4}>Tag </Heading>
                <Box mt={4}>
                  <FormLabel>Key</FormLabel>
                  <Input
                    type="text"
                    value={tag.key}
                    onChange={(e) =>
                      handleTransacntion4(index, "key", e.target.value)
                    }
                    disabled={isLoading}
                  />
                </Box>
                <Box mt={4}>
                  <FormLabel>Value</FormLabel>
                  <Input
                    type="text"
                    value={tag.value}
                    onChange={(e) =>
                      handleTransacntion4(index, "value", e.target.value)
                    }
                    disabled={isLoading}
                  />
                </Box>
              </Box>
            ))}
            <Box w={"full"} mt={4}>
              <FormLabel>Select Payment Method</FormLabel>
              <Select
                value={paymentMethod}
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
                isDisabled={isLoading}
              >
                {Object.keys(transactionData2.originPaymentDetails).map(
                  (method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  )
                )}
              </Select>
            </Box>
            {/* change method #card */}
            {/* {Object.keys(CARD).map((key, index) => (
              <Box w={"full"} key={index} mt={4}>
                {typeof (CARD as any)[key] === "object" ? null : (
                  <>
                    <FormLabel>{key}</FormLabel>
                    <Input
                      bg={"white"}
                      type="text"
                      value={(CARD as any)[key]}
                      onChange={(e) =>
                        setTransactionData2({
                          originPaymentDetails: {
                            CARD: {
                              ...CARD,
                              [key]: e.target.value,
                            },
                          },
                        })
                      }
                      disabled={isLoading}
                    />
                  </>
                )}
              </Box>
            ))}
            {Object.keys(nameOnCard).map((key, index) => (
              <Box w={"full"} key={index} mt={4}>
                <FormLabel>{key}</FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  onChange={(e) =>
                    handleNameOnCardChange("nameOnCard", key, e.target.value)
                  }
                  disabled={isLoading}
                />
              </Box>
            ))}
            {Object.keys(CardExpiry).map((key, index) => (
              <Box w={"full"} key={index} mt={4}>
                <FormLabel>{key}</FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  onChange={(e) =>
                    handleNameOnCardChange("CardExpiry", key, e.target.value)
                  }
                  disabled={isLoading}
                />
              </Box>
            ))}
            {Object.keys(merchantDetails).map((key, index) => (
              <Box w={"full"} key={index} mt={4}>
                <FormLabel>{key}</FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  onChange={(e) =>
                    handleNameOnCardChange(
                      "merchantDetails",
                      key,
                      e.target.value
                    )
                  }
                  disabled={isLoading}
                />
              </Box>
            ))}
            {cardTags.map((tag, index) => (
              <Box w={"full"} key={index}>
                <Heading pt={4}>Tag </Heading>
                <Box mt={4}>
                  <FormLabel>Key</FormLabel>
                  <Input
                    type="text"
                    value={tag.key}
                    onChange={(e) =>
                      handleTagsChange(index, "key", e.target.value)
                    }
                    disabled={isLoading}
                  />
                </Box>
                <Box mt={4}>
                  <FormLabel>Value</FormLabel>
                  <Input
                    type="text"
                    value={tag.value}
                    onChange={(e) =>
                      handleTagsChange(index, "value", e.target.value)
                    }
                    disabled={isLoading}
                  />
                </Box>
              </Box>
            ))} */}
            {/* #generic bank acc */}
            {/* {Object.keys(GENERIC_BANK_ACCOUNT).map((key, index) => (
              <Box w={"full"} key={index} mt={4}>
                {typeof (GENERIC_BANK_ACCOUNT as any)[key] === "object" ||
                Array.isArray((GENERIC_BANK_ACCOUNT as any)[key]) ? null : (
                  <>
                    <FormLabel>{key + "benk"}</FormLabel>
                    <Input
                      bg={"white"}
                      type="text"
                      value={(GENERIC_BANK_ACCOUNT as any)[key]}
                      onChange={(e) =>
                        setTransactionData2x({
                          originPaymentDetails: {
                            GENERIC_BANK_ACCOUNT: {
                              ...GENERIC_BANK_ACCOUNT,
                              [key]: e.target.value,
                            },
                          },
                        })
                      }
                      disabled={isLoading}
                    />
                  </>
                )}
              </Box>
            ))}
            {Object.keys(bankAddress).map((key, index) => (
              <Box w={"full"} key={index} mt={4}>
                {typeof (GENERIC_BANK_ACCOUNT as any)[key] ===
                "object" ? null : (
                  <>
                    <FormLabel>{key}</FormLabel>
                    <Input
                      bg={"white"}
                      type="text"
                      onChange={(e) =>
                        handleBankAddress("bankAddress", key, e.target.value)
                      }
                      disabled={isLoading}
                    />
                  </>
                )}
              </Box>
            ))}
            {bankAddressTags.map((tag, index) => (
              <Box w={"full"} key={index}>
                <Heading pt={4}> bank address Tag </Heading>
                <Box mt={4}>
                  <FormLabel>Key</FormLabel>
                  <Input
                    type="text"
                    value={tag.key}
                    onChange={(e) =>
                      handleBankAddressTagsChange(index, "key", e.target.value)
                    }
                    disabled={isLoading}
                  />
                </Box>
                <Box mt={4}>
                  <FormLabel>Value</FormLabel>
                  <Input
                    type="text"
                    value={tag.value}
                    onChange={(e) =>
                      handleBankAddressTagsChange(
                        index,
                        "value",
                        e.target.value
                      )
                    }
                    disabled={isLoading}
                  />
                </Box>
              </Box>
            ))}
            {bankAccountTags.map((tag, index) => (
              <Box w={"full"} key={index}>
                <Heading pt={4}>bank account Tag </Heading>
                <Box mt={4}>
                  <FormLabel>Key</FormLabel>
                  <Input
                    type="text"
                    value={tag.key}
                    onChange={(e) =>
                      handleBankTagsChange(index, "key", e.target.value)
                    }
                    disabled={isLoading}
                  />
                </Box>
                <Box mt={4}>
                  <FormLabel>Value</FormLabel>
                  <Input
                    type="text"
                    value={tag.value}
                    onChange={(e) =>
                      handleBankTagsChange(index, "value", e.target.value)
                    }
                    disabled={isLoading}
                  />
                </Box>
              </Box>
            ))} */}
            {/* IBAN */}
            {Object.keys(IBAN).map((key, index) => (
              <Box w={"full"} key={index} mt={4}>
                {typeof (IBAN as any)[key] === "object" ||
                Array.isArray((IBAN as any)[key]) ? null : (
                  <>
                    <FormLabel>{key}</FormLabel>
                    <Input
                      bg={"white"}
                      type="text"
                      value={(IBAN as any)[key]}
                      onChange={(e) =>
                        setTransactionData2z({
                          originPaymentDetails: {
                            IBAN: {
                              ...IBAN,
                              [key]: e.target.value,
                            },
                          },
                        })
                      }
                      disabled={isLoading}
                    />
                  </>
                )}
              </Box>
            ))}
            {Object.keys(bankAddressIban).map((key, index) => (
              <Box w={"full"} key={index} mt={4}>
                {typeof (IBAN as any)[key] ===
                "object" ? null : (
                  <>
                    <FormLabel>{key}</FormLabel>
                    <Input
                      bg={"white"}
                      type="text"
                      onChange={(e) =>
                        handleBankAddress("bankAddress", key, e.target.value)
                      }
                      disabled={isLoading}
                    />
                  </>
                )}
              </Box>
            ))}
          </Container>
          <Container
            centerContent
            w={{ base: "100%", md: "40%" }}
            bg={"black.200"}
            pb={8}
            borderRadius={10}
          >
            <Heading pt={4}>Response</Heading>
            <Box
              mt={4}
              w={"100%"}
              px={4}
              borderRadius={10}
              minH={{ base: "auto", md: "500px" }}
              bg={"blue.100"}
              overflowX="auto"
              position="relative"
            >
              {isLoading && (
                <Skeleton h={"100%"} px={4} py={4} my={4} borderRadius={10} />
              )}
              <pre style={{ padding: "10px" }}>
                <code>{responseText}</code>
              </pre>
            </Box>
          </Container>
        </Flex>
      </Container>
      <FloatingButton />
    </>
  );
}
