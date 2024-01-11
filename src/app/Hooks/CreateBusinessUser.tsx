import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useCreateBusinessUser = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [businessUser, setBusinessUser] = useState<{}>({
    createdTimestamp: 1641654664000,
    userId: "96647cfd9e8fe66ee0f3362e011e34e8",
    legalEntity: {
      companyGeneralDetails: {
        legalName: "Ozkan Hazelnut Export JSC",
      },
    },
  });

  const confirmCreateBusinessUser = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.createBusinessUser(
        businessUser
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

  const requiredBusinessUserFields = {
    userId: true,
    legalEntity: true,
    "legalEntity.companyGeneralDetails.legalName": true,
    createdTimestamp: true,
    "userStateDetails.state": true,
    "shareHolders.generalDetails.name.firstName": true,
    "directors.generalDetails.name.firstName": true,
    "savedPaymentDetails.method": true,
    "mcDetails.code": true,
    "tags.0.key": true,
    "tags.0.value": true,
  };

  return {
    businessUser,
    confirmCreateBusinessUser,
    requiredBusinessUserFields,
    setBusinessUser,
  };
};

export default useCreateBusinessUser;
