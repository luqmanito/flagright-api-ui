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
    eventId: "string",
    reason: "string",
    eventDescription: "string",
    updatedConsumerUserAttributes: {
      createdTimestamp: 1641654664000,
      userId: "96647cfd9e8fe66ee0f3362e011e34e8",
      userDetails: {
        name: {
          firstName: "Baran",
          middleName: "Realblood",
          lastName: "Ozkan",
        },
        dateOfBirth: "1991-01-01",
        countryOfResidence: "US",
        countryOfNationality: "DE",
      },
      legalDocuments: [
        {
          documentType: "passport",
          documentNumber: "Z9431P",
          documentIssuedDate: 1639939034000,
          documentExpirationDate: 1839939034000,
          documentIssuedCountry: "DE",
          tags: [
            {
              key: "customerType",
              value: "wallet",
            },
          ],
        },
      ],
      contactDetails: {
        emailIds: ["baran@flagright.com"],
        contactNumbers: ["+37112345432"],
        websites: ["flagright.com"],
        addresses: [
          {
            addressLines: ["Klara-Franke Str 20"],
            postcode: "10557",
            city: "Berlin",
            state: "Berlin",
            country: "Germany",
            tags: [
              {
                key: "customKey",
                value: "customValue",
              },
            ],
          },
        ],
      },
      tags: [
        {
          key: "customKey",
          value: "customValue",
        },
      ],
    },
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
