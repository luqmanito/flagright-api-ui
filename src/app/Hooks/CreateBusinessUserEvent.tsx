import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useCreateBusinessUserEvent = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [businessUserEvent, setBusinessUserEvent] = useState<{}>({
    timestamp: 1262300400000,
    userId: "string",
    
  });

  const confirmCreateBusinessUserEvent = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.createBusinessUserEvent(
        businessUserEvent
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

  const requiredBusinessUserEventFields = {
    timestamp: true,
    userId: true,
  };

  return {
    businessUserEvent,
    confirmCreateBusinessUserEvent,
    requiredBusinessUserEventFields,
    setBusinessUserEvent,
  };
};

export default useCreateBusinessUserEvent;
