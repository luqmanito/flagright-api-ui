import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useConsumerUser = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [consumerUser, setConsumerUser] = useState<{}>({
    createdTimestamp: 1641654664000,
    userId: "96647cfd9e8fe66ee0f3362e011e34e8",
  });

  const confirmConsumerUser = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.createConsumerUser(
        consumerUser
      );
      console.log(response);

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

  const requiredConsumerUser = {
    userId: true,
    createdTimestamp: true,
    "userDetails.name.firstName": true,
    "legalDocuments.0.documentType": true,
    "legalDocuments.0.documentNumber": true,
    "pepStatus.isPepHit": true,
    "tags.0.key": true,
    "tags.0.value": true,
  };

  return {
    consumerUser,
    confirmConsumerUser,
    requiredConsumerUser,
    setConsumerUser,
  };
};

export default useConsumerUser;
