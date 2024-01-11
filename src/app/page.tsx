"use client";

import {
  Box,
  Button,
  Center,
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
import useTransactionData from "@/app/Hooks/verifyTransaction";
import { buttonsData } from "./data";
import { forwardRef, Ref, useEffect, useState } from "react";
import Title from "@/Components/Title";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";
import useRetrieveTransaction from "@/app/Hooks/RetrieveTransaction";
import useTransactionEvent from "@/app/Hooks/CreateTransactionEvent";
import useConsumerUser from "@/app/Hooks/CreateConsumerUser";
import useRetrieveConsumerUser from "@/app/Hooks/RetrieveConsumerUser";
import useCreateBusinessUser from "@/app/Hooks/CreateBusinessUser";
import useRetrieveBusinessUser from "@/app/Hooks/RetrieveBusinessUser";
import useCreateConsumerUserEvent from "@/app/Hooks/CreateConsumerUserEvent";
import useCreateBusinessUserEvent from "@/app/Hooks/CreateBusinessUserEvent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Page() {
  const { isLoading } = useLoading();
  const { responseText, setResponseText } = useResponse();
  // const [mpesa, setMpesa] = useState(false);
  const [upi, setUpi] = useState(false);
  const {
    transactionData,
    setMpesaData,
    setMpesa,
    mpesa,
    confirmOrder,
    mpesaData,
    setTransactionData,
    requiredFields,
  } = useTransactionData();
  const {
    confirmRetrieveTransaction,
    transactionId,
    setTransactionId,
    requiredRetrieveFields,
  } = useRetrieveTransaction();
  const {
    transactionEvent,
    confirmTransactionEvent,
    requiredTransactionEventFields,
    setTransactionEvent,
  } = useTransactionEvent();
  const {
    consumerUser,
    confirmConsumerUser,
    requiredConsumerUser,
    setConsumerUser,
  } = useConsumerUser();
  const {
    setUserId,
    confirmRetrieveConsumer,
    userId,
    requiredRetrieveConsumerFields,
  } = useRetrieveConsumerUser();
  const {
    setUserBusinessId,
    confirmRetrieveBusiness,
    userBusinessId,
    requiredRetrieveBusinessFields,
  } = useRetrieveBusinessUser();
  const {
    businessUser,
    confirmCreateBusinessUser,
    requiredBusinessUserFields,
    setBusinessUser,
  } = useCreateBusinessUser();
  const {
    consumerUserEvent,
    confirmCreateConsumerUserEvent,
    requiredConsumerUserEventFields,
    setConsumerUserEvent,
  } = useCreateConsumerUserEvent();
  const {
    businessUserEvent,
    confirmCreateBusinessUserEvent,
    requiredBusinessUserEventFields,
    setBusinessUserEvent,
  } = useCreateBusinessUserEvent();

  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [title, setTitle] = useState("Verify a Transaction");

  const titleToSetterMap: Record<
    string,
    React.Dispatch<React.SetStateAction<any>>
  > = {
    "Verify a Transaction": setTransactionData,
    "Retrieve a Transaction": setTransactionId,
    "Create a Transaction Event": setTransactionEvent,
    "Create a Consumer User": setConsumerUser,
    "Retrieve a Consumer User": setUserId,
    "Create a Business User": setBusinessUser,
    "Retrieve a Business User": setUserBusinessId,
    "Create a Consumer User Event": setConsumerUserEvent,
    "Create a Business User Event": setBusinessUserEvent,
  };

  const titleToRequiredMap: Record<string, any> = {
    "Verify a Transaction": requiredFields,
    "Retrieve a Transaction": requiredRetrieveFields,
    "Create a Transaction Event": requiredTransactionEventFields,
    "Create a Consumer User": requiredConsumerUser,
    "Retrieve a Consumer User": requiredRetrieveConsumerFields,
    "Create a Business User": requiredBusinessUserFields,
    "Retrieve a Business User": requiredRetrieveBusinessFields,
    "Create a Consumer User Event": requiredConsumerUserEventFields,
    "Create a Business User Event": requiredBusinessUserEventFields,
  };

  const changeDataApi = () => {
    let data = {};
    switch (title) {
      case "Verify a Transaction":
        data = transactionData;
        break;
      case "Retrieve a Transaction":
        data = transactionId;
        break;
      case "Create a Transaction Event":
        data = transactionEvent;
        break;
      case "Create a Consumer User":
        data = consumerUser;
        break;
      case "Retrieve a Consumer User":
        data = userId;
        break;
      case "Create a Business User":
        data = businessUser;
        break;
      case "Retrieve a Business User":
        data = userBusinessId;
        break;
      case "Create a Consumer User Event":
        data = consumerUserEvent;
        break;
      case "Create a Business User Event":
        data = businessUserEvent;
        break;
    }
    return renderInputs(data);
  };
  const changeActionButton = () => {
    let func = confirmOrder;
    switch (title) {
      case "Verify a Transaction":
        func = confirmOrder;
        break;
      case "Retrieve a Transaction":
        func = confirmRetrieveTransaction;
        break;
      case "Create a Transaction Event":
        func = confirmTransactionEvent;
        break;
      case "Create a Consumer User":
        func = confirmConsumerUser;
        break;
      case "Retrieve a Consumer User":
        func = confirmRetrieveConsumer;
        break;
      case "Create a Business User":
        func = confirmCreateBusinessUser;
        break;
      case "Retrieve a Business User":
        func = confirmRetrieveBusiness;
        break;
      case "Create a Consumer User Event":
        func = confirmCreateConsumerUserEvent;
        break;
      case "Create a Business User Event":
        func = confirmCreateBusinessUserEvent;
        break;
    }

    return func();
  };

  const setterFunction = titleToSetterMap[title];
  const setterRequired = titleToRequiredMap[title];

  const handleButtonClick = (index: number, label: string) => {
    setResponseText(null);
    setSelectedButton(index);
    setTitle(label);
  };

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedValue = localStorage.getItem("yourLocalStorageKey");
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    localStorage.setItem("yourLocalStorageKey", newValue);
  };

  interface ExampleCustomInputProps {
    value?: any;
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  }

  const ExampleCustomInput = forwardRef(
    (
      { value, onClick }: ExampleCustomInputProps,
      ref: Ref<HTMLInputElement>
    ) => (
      <Input
        readOnly
        ref={ref}
        value={value}
        className="example-custom-input"
        onClick={onClick}
      />
    )
  );

  const renderInputs: (data: any, parentKey?: string) => JSX.Element[] = (
    data: any,
    parentKey?: string
  ) => {
    return Object.keys(data)
      .map((key) => {
        const currentKey = parentKey ? `${parentKey}.${key}` : key;
        const value = data[key];
        const isRequired = setterRequired[currentKey];

        if (typeof value === "object" && value !== null) {
          return renderInputs(value, currentKey);
        }

        return (
          <FormControl key={currentKey} mt={4} isRequired={isRequired}>
            <FormLabel>{currentKey}</FormLabel>
            {currentKey === "timestamp" || currentKey === "createdTimestamp" ? (
              <DatePicker
                customInput={<ExampleCustomInput />}
                selected={value}
                onChange={(e) => {
                  setterFunction((prevData: any) => {
                    const newData = { ...prevData };
                    const keys = currentKey.split(".");
                    let currentObj = newData;

                    keys.forEach((k: string | number, index: number) => {
                      if (index === keys.length - 1) {
                        currentObj[k] = e?.getTime();
                      } else {
                        currentObj[k] = { ...(currentObj[k] || {}) };
                        currentObj = currentObj[k];
                      }
                    });
                    return newData;
                  });
                }}
              />
            ) : currentKey === "executedRules.0.ruleHit" ? (
              <Select
                onChange={(e) => {
                  setterFunction((prevData: any) => {
                    const newData = { ...prevData };
                    const keys = currentKey.split(".");
                    let currentObj = newData;

                    keys.forEach((k, index) => {
                      if (index === keys.length - 1) {
                        currentObj[k] =
                          e.target.value === "true" ? true : false;
                      } else {
                        currentObj[k] = { ...(currentObj[k] || {}) };
                        currentObj = currentObj[k];
                      }
                    });
                    return newData;
                  });
                }}
              >
                <option value={"true"}>True</option>
                <option value={"false"}>False</option>
              </Select>
            ) : currentKey === "type" ? (
              <Select
                onChange={(e) => {
                  setterFunction((prevData: any) => {
                    const newData = { ...prevData };
                    const keys = currentKey.split(".");
                    let currentObj = newData;

                    keys.forEach((k, index) => {
                      if (index === keys.length - 1) {
                        currentObj[k] = e.target.value;
                      } else {
                        currentObj[k] = { ...(currentObj[k] || {}) };
                        currentObj = currentObj[k];
                      }
                    });
                    return newData;
                  });
                }}
              >
                <option value={"DEPOSIT"}>DEPOSIT</option>
                <option value={"TRANSFER"}>TRANSFER</option>
                <option value={"EXTERNAL_PAYMENT"}>EXTERNAL_PAYMENT</option>
                <option value={"WITHDRAWAL"}>WITHDRAWAL</option>
                <option value={"REFUND"}>REFUND</option>
                <option value={"OTHER"}>OTHER</option>
              </Select>
            ) : currentKey === "originPaymentDetails.method" ? (
              <Select
                onChange={(e) => {
                  setterFunction((prevData: any) => {
                    const newData = { ...prevData };
                    const keys = currentKey.split(".");
                    let currentObj = newData;

                    keys.forEach((k, index) => {
                      if (index === keys.length - 1) {
                        currentObj[k] = e.target.value;
                      } else {
                        currentObj[k] = { ...(currentObj[k] || {}) };
                        currentObj = currentObj[k];
                      }
                    });

                    if (e.target.value === "UPI") {
                      currentObj["upiID"] = "string"; // Replace "additionalKey" and "someValue" with your desired key-value pair
                    } else {
                      // If the selected value is not "UPI", remove the additional key
                      delete currentObj["upiID"];
                    }
                    if (e.target.value === "WALLET") {
                      currentObj["walletType"] = "string"; // Replace "additionalKey" and "someValue" with your desired key-value pair
                    } else {
                      // If the selected value is not "UPI", remove the additional key
                      delete currentObj["walletType"];
                    }

                    return newData;
                  });
                  e.target.value === "MPESA"
                    ? (setMpesa(true), setUpi(false))
                    : e.target.value === "UPI"
                    ? (setUpi(true), setMpesa(false))
                    : setMpesa(false);
                }}
              >
                <option value={"CARD"}>CARD</option>
                <option value={"GENERIC_BANK_ACCOUNT"}>
                  GENERIC_BANK_ACCOUNT
                </option>
                <option value={"IBAN"}>IBAN</option>
                <option value={"ACH"}>ACH</option>
                <option value={"UPI"}>UPI</option>
                <option value={"WALLET"}>WALLET</option>
                <option value={"SWIFT"}>SWIFT</option>
                <option value={"MPESA"}>MPESA</option>
                <option value={"CHECK"}>CHECK</option>
              </Select>
            ) : (
              <Input
                value={value}
                onChange={(e) => {
                  setterFunction((prevData: any) => {
                    const newData = { ...prevData };
                    const keys = currentKey.split(".");
                    let currentObj = newData;
                    keys.forEach((k, index) => {
                      if (index === keys.length - 1) {
                        currentObj[k] = e.target.value;
                      } else {
                        currentObj[k] = { ...(currentObj[k] || {}) };
                        currentObj = currentObj[k];
                      }
                    });
                    return newData;
                  });
                }}
                placeholder={currentKey}
              />
            )}
          </FormControl>
        );
      })
      .flat();
  };

  const handleMpesaDataChange = (key: string, value: string) => {
    setMpesaData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

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
      onClick={changeActionButton}
    >
      Submit
    </Button>
  );
  const buttonHeight = useBreakpointValue({
    xl: "45px",
    sm: "65px",
  });

  return (
    <>
      <Container maxW="100%" bg={"blue.100"} pt={4} pb={20}>
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
            bg={"blue.200"}
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
                onClick={() => handleButtonClick(index, item.label)}
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
            w={{ base: "100%", md: "45%" }}
            bg={"blue.200"}
            pb={8}
            borderRadius={10}
          >
            <Center>
              <Heading pt={4}>{title}</Heading>
            </Center>
            <FormLabel>Key</FormLabel>
            <Input value={inputValue} onChange={handleInputChange} />
            {changeDataApi()}
            {mpesa ? (
              <>
                <FormLabel mt={4}>businessShortCode</FormLabel>
                <Input
                  value={mpesaData.businessShortCode}
                  onChange={(e) =>
                    handleMpesaDataChange("businessShortCode", e.target.value)
                  }
                />
                <FormLabel>transactionType</FormLabel>
                <Select
                  value={mpesaData.transactionType}
                  onChange={(e) =>
                    handleMpesaDataChange("transactionType", e.target.value)
                  }
                >
                  <option value={"CustomerPayBillOnline"}>
                    CustomerPayBillOnline
                  </option>
                  <option value={"CustomerBuyGoodsOnline"}>
                    CustomerBuyGoodsOnline
                  </option>
                  <option value={"SalaryPayment"}>SalaryPayment</option>
                  <option value={"CustomerBuyGoodsOnline"}>
                    CustomerBuyGoodsOnline
                  </option>
                  <option value={"PromotionPayment"}>PromotionPayment</option>
                  <option value={"BusinessPayment"}>BusinessPayment</option>
                  <option value={"CustomerPayBillOnline"}>
                    CustomerPayBillOnline
                  </option>
                </Select>
                <FormLabel>phoneNumber</FormLabel>
                <Input
                  value={mpesaData.phoneNumber}
                  onChange={(e) =>
                    handleMpesaDataChange("phoneNumber", e.target.value)
                  }
                />
              </>
            ) : null}
            {/* {upi ? (
              <>
                <FormLabel mt={4}>UpiId</FormLabel>
                <Input value={"string"} onChange={handleInputChange} />
              </>
            ) : null} */}
          </Container>
          <Container
            centerContent
            w={{ base: "100%", md: "40%" }}
            bg={"blue.200"}
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
