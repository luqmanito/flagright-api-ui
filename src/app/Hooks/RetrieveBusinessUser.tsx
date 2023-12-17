import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useRetrieveBusinessUser = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [userBusinessId, setUserBusinessId] = useState<{ userId: string }>({
    userId: "96647cfd9e8fe66ee0f3362e011e34e8",
  });

  const confirmRetrieveBusiness = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.getBusinessUser(userBusinessId.userId);
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

  const requiredRetrieveBusinessFields = {
    userId: true,
  };

  return {
    setUserBusinessId,
    confirmRetrieveBusiness,
    userBusinessId,
    requiredRetrieveBusinessFields,
  };
};

export default useRetrieveBusinessUser;
