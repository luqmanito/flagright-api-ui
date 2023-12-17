import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useRetrieveTransaction = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [transactionId, setTransactionId] = useState<{ transactionId: string }>(
    {
      transactionId: "7b80a539eea6e78acbd6d458e5971482",
    }
  );

  const confirmRetrieveTransaction = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.getTransaction(
        transactionId.transactionId
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

  const requiredRetrieveFields = {
    transactionId: true,
  };

  return {
    setTransactionId,
    confirmRetrieveTransaction,
    transactionId,
    requiredRetrieveFields,
  };
};

export default useRetrieveTransaction;
