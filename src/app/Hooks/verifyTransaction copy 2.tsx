import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useTransactionData = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
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
      ACH: {
        method: "ACH",
        routingNumber: "",
        AccountNumber: "",
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
        beneficiaryName: "",
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      SWIFT: {
        method: "SWIFT",
        swiftCode: "",
        AccountNumber: "",
        AccountType: "",
        bankName: "",
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
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      MPESA: {
        method: "MPESA",
        businessShortCode: "",
        transactionType: "",
        phoneNumber: "",
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      UPI: {
        method: "UPI",
        upiID: "",
        bankProvider: "",
        interfaceProvider: "",
        name: "",
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      WALLET: {
        method: "WALLET",
        walletType: "",
        walletID: "",
        paymentChannel: "",
        name: "",
        walletPhoneNumber: "",
        walletBalance: {
          amountValue: "",
          amountCurrency: "",
        },
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      CHECK: {
        method: "CHECK",
        checkNumber: "",
        checkIdentifier: "",
        deliveryStatus: "",
        etaTimestamp: "",
        name: "",
        shippingAddress: {
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
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
    },
    destinationPaymentDetails: {
      CARD: {
        method: "CARD",
        cardFingerprint: "20ac00fed8ef913aefb17cfae1097cce",
        cardIssuedCountry: "US",
        transactionReferenceField: "Deposit",
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
            key: "",
            value: "",
          },
        ],
      },
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
      ACH: {
        method: "ACH",
        routingNumber: "",
        AccountNumber: "",
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
        beneficiaryName: "",
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      SWIFT: {
        method: "SWIFT",
        swiftCode: "",
        AccountNumber: "",
        AccountType: "",
        bankName: "",
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
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      MPESA: {
        method: "MPESA",
        businessShortCode: "",
        transactionType: "",
        phoneNumber: "",
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      UPI: {
        method: "UPI",
        upiID: "",
        bankProvider: "",
        interfaceProvider: "",
        name: "",
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      WALLET: {
        method: "WALLET",
        walletType: "",
        walletID: "",
        paymentChannel: "",
        name: "",
        walletPhoneNumber: "",
        walletBalance: {
          amountValue: "",
          amountCurrency: "",
        },
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
      CHECK: {
        method: "CHECK",
        checkNumber: "",
        checkIdentifier: "",
        deliveryStatus: "",
        etaTimestamp: "",
        name: "",
        shippingAddress: {
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
        tags: [
          {
            key: "",
            value: "",
          },
        ],
      },
    },
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

  // const requiredFields = {
  //   transactionId: true,
  //   type: true,
  //   timestamp: true,
  //   "originAmountDetails.transactionAmount": true,
  //   "originAmountDetails.transactionCurrency": true,
  //   "destinationAmountDetails.transactionAmount": true,
  //   "destinationAmountDetails.transactionCurrency": true,
  //   "originPaymentDetails.method": true,
  //   "destinationPaymentDetails.method": true,
  //   "tags.0.key": true,
  //   "tags.0.value": true,
  // };

  return {
    transactionData,
    confirmOrder,
    requiredFields,
    setTransactionData,
  };
};

export default useTransactionData;
