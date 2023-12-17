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
        businessIndustry: ["Farming"],
        mainProductsServicesSold: ["Hazelnut"],
      },
      companyFinancialDetails: {
        expectedTransactionAmountPerMonth: {
          amountValue: 800,
          amountCurrency: "GBP",
        },
        expectedTurnoverPerMonth: {
          amountValue: 8000,
          amountCurrency: "USD",
        },
      },
      companyRegistrationDetails: {
        registrationIdentifier: "PSJ554342",
        registrationCountry: "DE",
      },
      reasonForAccountOpening: ["string"],
      contactDetails: {
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
    },
    shareHolders: [
      {
        generalDetails: {
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
          contactNumbers: ["+371 123132"],
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
    ],
    directors: [
      {
        generalDetails: {
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
          contactNumbers: ["+371 123132"],
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
    ],
    tags: [
      {
        key: "customKey",
        value: "customValue",
      },
    ],
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
