import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useRetrieveConsumerUser = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [userId, setUserId] = useState<{ userId: string }>({
    userId: "96647cfd9e8fe66ee0f3362e011e34e8",
  });

  const confirmRetrieveConsumer = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.getConsumerUser(userId.userId);
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

  const requiredRetrieveConsumerFields = {
    userId: true,
  };

  return {
    setUserId,
    confirmRetrieveConsumer,
    userId,
    requiredRetrieveConsumerFields,
  };
};

export default useRetrieveConsumerUser;
