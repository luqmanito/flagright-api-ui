import { useState } from "react";
import { TransactionModel } from "@/app/Models/VerifyTransactionModel";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useTransactionDatas = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [transactionData, setTransactionData] = useState({
    type: "DEPOSIT",
    transactionId: "7b80a539eea6e78acbd6d458e5971482",
    timestamp: 1641654664000,
    originUserId: "8650a2611d0771cba03310f74bf6",
    destinationUserId: "9350a2611e0771cba03310f74bf6",
    transactionState: "",
    reference: "loan repayment",
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
    promotionCodeUsed: true,
    originPaymentDetails: {
      method: "CARD",
      cardFingerprint: "20ac00fed8ef913aefb17cfae1097cce",
      cardIssuedCountry: "US",
      transactionReferenceField: "Deposit",
      _3dsDone: true,
    },
    destinationPaymentDetails: {
      method: "CARD",
      cardFingerprint: "20ac00fed8ef913aefb17cfae1097cce",
      cardIssuedCountry: "IN",
      transactionReferenceField: "Deposit",
      _3dsDone: true,
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
    tags: [
      {
        key: "customKey",
        value: "customValue",
      },
    ],
  });

  const confirmOrder = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.create(transactionData);
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

  const requiredFields = {
    transactionId: true,
    type: true,
    timestamp: true,
    "originAmountDetails.transactionAmount": true,
    "originAmountDetails.transactionCurrency": true,
    "destinationAmountDetails.transactionAmount": true,
    "destinationAmountDetails.transactionCurrency": true,
    "originPaymentDetails.method": true,
    "destinationPaymentDetails.method": true,
    "tags.0.key": true,
    "tags.0.value": true,
  };

  return {
    transactionData,
    confirmOrder,
    requiredFields,
    setTransactionData,
  };
};

export default useTransactionDatas;
