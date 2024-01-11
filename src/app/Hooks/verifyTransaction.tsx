import { useState } from "react";
import {
  MpesaModel,
  TransactionModel,
} from "@/app/Models/VerifyTransactionModel";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useTransactionData = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [transactionData, setTransactionData] = useState<TransactionModel>({
    transactionId: "7b80a539eea6e78acbd6d458e5971482",
    type: "DEPOSIT",
    timestamp: 1641654664000,
    originPaymentDetails: {
      method: "CARD",
    },
  });
  const [mpesa, setMpesa] = useState(false);
  const [mpesaData, setMpesaData] = useState<MpesaModel>({
    businessShortCode: "string",
    transactionType: "CustomerPayBillOnline",
    phoneNumber: "string",
  });

  const combinedData = {
    ...transactionData,
    originPaymentDetails: {
      ...transactionData.originPaymentDetails,
      businessShortCode: mpesaData.businessShortCode,
      transactionType: mpesaData.transactionType,
      phoneNumber: mpesaData.phoneNumber,
    },
  };

  const confirmOrder = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.create(
        mpesa ? combinedData : transactionData
      );
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
    mpesaData,
    setMpesa,
    mpesa,
    setMpesaData,
  };
};

export default useTransactionData;
