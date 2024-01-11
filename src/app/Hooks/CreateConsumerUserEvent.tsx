import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useCreateConsumerUserEvent = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [consumerUserEvent, setConsumerUserEvent] = useState<{}>({
    timestamp: 1262300400000,
    userId: "string",
  });

  const confirmCreateConsumerUserEvent = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.createConsumerUserEvent(
        consumerUserEvent
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

  const requiredConsumerUserEventFields = {
    timestamp: true,
    userId: true,
  };

  return {
    consumerUserEvent,
    confirmCreateConsumerUserEvent,
    requiredConsumerUserEventFields,
    setConsumerUserEvent,
  };
};

export default useCreateConsumerUserEvent;
