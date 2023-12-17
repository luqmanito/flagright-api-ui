import { useState } from "react";
import transactionNetwork from "@/app/Network/lib/transaction";
import { useLoading } from "@/Context/loading";
import { useResponse } from "@/Context/Response";

const useTransactionEvent = () => {
  const { setResponseText } = useResponse();
  const { startLoading, stopLoading } = useLoading();
  const [transactionEvent, setTransactionEvent] = useState<{}>({
    timestamp: 1431231244001,
    transactionId: "7b80a539eea6e78acbd6d458e5971482",
    transactionState: "SUCCESSFUL",
    eventId: "aaeeb166147a406b957dd9147a406b957",
    eventDescription: "Transaction created",
    metaData: {
      batteryLevel: 76.3,
      deviceLatitude: 13.009711,
      deviceLongitude: 76.102898,
      ipAddress: "79.144.2.20",
      vpnUsed: true,
    },
  });

  const confirmTransactionEvent = async () => {
    startLoading();
    try {
      const response = await transactionNetwork.createTransactionEvent(
        transactionEvent
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

  const requiredTransactionEventFields = {
    transactionState: true,
    timestamp: true,
    transactionId: true,
  };

  return {
    transactionEvent,
    confirmTransactionEvent,
    requiredTransactionEventFields,
    setTransactionEvent,
  };
};

export default useTransactionEvent;
