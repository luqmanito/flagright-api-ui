import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";
import {
  CardDetails,
  GENERIC_BANK_ACCOUNT_model,
} from "../Models/VerifyTransactionModel";

const useTransactionData = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [paymentMethod, setPaymentMethod] = useState("CARD");
  const [transactionData, setTransactionData] = useState({
    transactionId: "7b80a539eea6e78acbd6d458e5971482",
    type: "DEPOSIT",
    originUserId: "8650a2611d0771cba03310f74bf6",
    destinationUserId: "9350a2611e0771cba03310f74bf6",
    transactionState: "",
    promotionCodeUsed: true,
    timestamp: 1641654664000,
    reference: "loan repayment",
    relatedTransactionIds: "",
    productType: "",
  });
  const [transactionData3, setTransactionData3] = useState({
    originAmountDetails: {
      country: "DE",
      transactionAmount: 800,
      transactionCurrency: "EUR",
    },
    destinationAmountDetails: {
      country: "IN",
      transactionAmount: 68351.34,
      transactionCurrency: "INR",
    },
    originDeviceData: {
      batteryLevel: 95,
      deviceLatitude: 13.0033,
      deviceLongitude: 76.1004,
      ipAddress: "10.23.191.2",
      deviceIdentifier: "3c49f915d04485e34caba",
      vpnUsed: false,
      operatingSystem: "Android 11.2",
      deviceMaker: "ASUS",
      deviceModel: "Zenphone M2 Pro Max",
      deviceYear: "2018",
      appVersion: "1.1.0",
    },
    destinationDeviceData: {
      batteryLevel: 95,
      deviceLatitude: 13.0033,
      deviceLongitude: 76.1004,
      ipAddress: "10.23.191.2",
      deviceIdentifier: "3c49f915d04485e34caba",
      vpnUsed: false,
      operatingSystem: "Android 11.2",
      deviceMaker: "ASUS",
      deviceModel: "Zenphone M2 Pro Max",
      deviceYear: "2018",
      appVersion: "1.1.0",
    },
  });
  const [transactionData4, setTransactionData4] = useState({
    tags: [
      {
        key: "customKey",
        value: "customValue",
      },
    ],
  });

  const [transactionData2, setTransactionData2] = useState({
    originPaymentDetails: {
      CARD: {
        method: "CARD",
        cardFingerprint: "",
        cardIssuedCountry: "",
        transactionReferenceField: "",
        _3dsDone: true,
        nameOnCard: {
          firstName: "baran",
          middleName: "",
          lastName: "",
        },
        CardExpiry: {
          month: 0,
          year: 0,
        },
        cardLast4Digits: "",
        cardBrand: "",
        cardFunding: "",
        cardAuthenticated: "",
        paymentChannel: "",
        cardType: "",
        merchantDetails: {
          id: "",
          category: "",
          MCC: "",
          city: "",
          country: "",
          state: "",
          postCode: "",
        },
        tags: [
          {
            key: "customKey",
            value: "customValue",
          },
        ],
      },
    },
  });
  const [transactionData2x, setTransactionData2x] = useState({
    originPaymentDetails: {
      GENERIC_BANK_ACCOUNT: {
        method: "GENERIC_BANK_ACCOUNT",
        accountNumber: "",
        accountType: "",
        bankName: "",
        bankCode: "",
        name: "",
        bankAddress: {
          addressLines: "",
          postcode: "",
          city: "",
          state: "",
          country: "",
          tags: [
            {
              key: "",
              value: "",
            },
          ],
        },
        specialInstructions: "",
        paymentChannel: "",
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
    },
  });
  const [transactionData2z, setTransactionData2z] = useState({
    originPaymentDetails: {
      IBAN: {
        method: "IBAN",
        BIC: "",
        bankName: "",
        bankAddress: {
          addressLines: "",
          postcode: "",
          city: "",
          state: "",
          country: "",
          tags: [
            {
              key: "",
              value: "",
            },
          ],
        },
        country: "",
        IBAN: "",
        name: "",
        bankBranchCode: "",
        paymentChannel: "",
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
    },
  });

  const handleTransacntion3 = (key: string, subKey: string, value: any) => {
    setTransactionData3((prevData) => ({
      ...prevData,
      [key]: {
        ...(prevData as any)[key],
        [subKey]: value,
      },
    }));
  };

  const handleTransacntion4 = (index: number, field: string, value: any) => {
    setTransactionData4((prevData) => {
      const updatedTags = [...prevData.tags];
      updatedTags[index] = {
        ...updatedTags[index],
        [field]: value,
      };
      return {
        ...prevData,
        tags: updatedTags,
      };
    });
  };

  const handleNameOnCardChange = (
    parentKey: keyof CardDetails,
    nestedKey: string,
    value: string
  ) => {
    setTransactionData2((prevData) => ({
      ...prevData,
      originPaymentDetails: {
        CARD: {
          ...prevData.originPaymentDetails.CARD,
          [parentKey]: {
            ...(prevData.originPaymentDetails.CARD[parentKey] as Record<
              string,
              any
            >),
            [nestedKey]: value,
          },
        },
      },
    }));
  };
  const handleBankAddress = (
    parentKey: keyof GENERIC_BANK_ACCOUNT_model,
    nestedKey: string,
    value: string
  ) => {
    setTransactionData2x((prevData) => ({
      ...prevData,
      originPaymentDetails: {
        GENERIC_BANK_ACCOUNT: {
          ...prevData.originPaymentDetails.GENERIC_BANK_ACCOUNT,
          [parentKey]: {
            ...(prevData.originPaymentDetails.GENERIC_BANK_ACCOUNT[
              parentKey
            ] as Record<string, any>),
            [nestedKey]: value,
          },
        },
      },
    }));
  };
  const handleBankTagsChange = (index: number, key: string, value: string) => {
    setTransactionData2x((prevData) => {
      const updatedTags = [
        ...prevData.originPaymentDetails.GENERIC_BANK_ACCOUNT.tags,
      ];
      updatedTags[index] = {
        ...updatedTags[index],
        [key]: value,
      };

      return {
        originPaymentDetails: {
          GENERIC_BANK_ACCOUNT: {
            ...prevData.originPaymentDetails.GENERIC_BANK_ACCOUNT,
            tags: updatedTags,
          },
        },
      };
    });
  };
  const handleBankAddressTagsChange = (
    index: number,
    key: string,
    value: string
  ) => {
    setTransactionData2x((prevData) => {
      const updatedTags = [
        ...prevData.originPaymentDetails.GENERIC_BANK_ACCOUNT.bankAddress.tags,
      ];
      updatedTags[index] = {
        ...updatedTags[index],
        [key]: value,
      };

      return {
        originPaymentDetails: {
          GENERIC_BANK_ACCOUNT: {
            ...prevData.originPaymentDetails.GENERIC_BANK_ACCOUNT,
            bankAddress: {
              ...prevData.originPaymentDetails.GENERIC_BANK_ACCOUNT.bankAddress,
              tags: updatedTags,
            },
          },
        },
      };
    });
  };
  const handleTagsChange = (index: number, key: string, value: string) => {
    setTransactionData2((prevData) => {
      const updatedTags = [...prevData.originPaymentDetails.CARD.tags];
      updatedTags[index] = {
        ...updatedTags[index],
        [key]: value,
      };

      return {
        originPaymentDetails: {
          CARD: {
            ...prevData.originPaymentDetails.CARD,
            tags: updatedTags,
          },
        },
      };
    });
  };

  const handlePaymentMethodChange = (method: any) => {
    setPaymentMethod(method);
  };

  const confirmOrder = async (data: any) => {
    startLoading();
    try {
      const response = await transactionNetwork.create(data);
      const formattedResponse = JSON.stringify(response.data, null, 2);
      setResponseText(formattedResponse);
      return response;
    } catch (error: any) {
      setResponseText(`Error: ${error.message}`);
      throw error;
    } finally {
      stopLoading();
    }
  };

  return {
    transactionData,
    transactionData3,
    handleTransacntion3,
    handleBankAddress,
    transactionData2,
    transactionData2x,
    paymentMethod,
    confirmOrder,
    setTransactionData2,
    handleBankAddressTagsChange,
    setTransactionData2x,
    transactionData2z,
    setTransactionData2z,
    transactionData4,
    handleTransacntion4,
    handleBankTagsChange,
    handlePaymentMethodChange,
    setTransactionData,
    handleTagsChange,
    handleNameOnCardChange,
  };
};

export default useTransactionData;
