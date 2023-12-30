// TransactionModel.ts
export interface TransactionModel {
  transactionId: string;
  type: string;
  originUserId: string;
  destinationUserId: string;
  originAmountDetails: {
    country: string;
    transactionAmount: number;
    transactionCurrency: string;
  };
  destinationAmountDetails: {
    country: string;
    transactionAmount: number;
    transactionCurrency: string;
  };
  promotionCodeUsed: boolean;
  timestamp: number;
  originPaymentDetails: {
    method: string;
    cardFingerprint: string;
    cardIssuedCountry: string;
    transactionReferenceField: string;
    _3dsDone: boolean;
  };
  destinationPaymentDetails: {
    method: string;
    cardFingerprint: string;
    cardIssuedCountry: string;
    transactionReferenceField: string;
    _3dsDone: boolean;
  };
  reference: string;
  originDeviceData: {
    batteryLevel: number;
    deviceLatitude: number;
    deviceLongitude: number;
    ipAddress: string;
    deviceIdentifier: string;
    vpnUsed: boolean;
    operatingSystem: string;
    deviceMaker: string;
    deviceModel: string;
    deviceYear: string;
    appVersion: string;
  };
  destinationDeviceData: {
    batteryLevel: number;
    deviceLatitude: number;
    deviceLongitude: number;
    ipAddress: string;
    deviceIdentifier: string;
    vpnUsed: boolean;
    operatingSystem: string;
    deviceMaker: string;
    deviceModel: string;
    deviceYear: string;
    appVersion: string;
  };
  tags: Array<{
    key: string;
    value: string;
  }>;
}

type YourTransactionData2Type = {
  originPaymentDetails: {
    CARD: {
      method: string;
      cardFingerprint: string;
      cardIssuedCountry: string;
      transactionReferenceField: string;
      _3dsDone: boolean;
      nameOnCard: {
        firstName: string;
        middleName: string;
        lastName: string;
      };
      CardExpiry: {
        month: number;
        year: number;
      };
      cardLast4Digits: string;
      cardBrand: string;
      cardFunding: string;
      cardAuthenticated: string;
      paymentChannel: string;
      cardType: string;
      merchantDetails: {
        id: string;
        category: string;
        MCC: string;
        city: string;
        country: string;
        state: string;
        postCode: string;
      };
      tags: {
        key: string;
        value: string;
      }[];
    };
    GENERIC_BANK_ACCOUNT: {
      method: string;
      accountNumber: string;
      accountType: string;
      bankName: string;
      bankCode: string;
      name: string;
      bankAddress: {
        addressLines: string;
        postcode: string;
        city: string;
        state: string;
        country: string;
        tags: {
          key: string;
          value: string;
        }[];
      };
      specialInstructions: string;
      paymentChannel: string;
      tags: {
        key: string;
        value: string;
      }[];
    };
    IBAN: {
      method: string;
      BIC: string;
      bankName: string;
      bankAddress: {
        addressLines: string;
        postcode: string;
        city: string;
        state: string;
        country: string;
        tags: {
          key: string;
          value: string;
        }[];
      };
      country: string;
      IBAN: string;
      name: string;
      bankBranchCode: string;
      paymentChannel: string;
      tags: {
        key: string;
        value: string;
      }[];
    };
    ACH: {
      method: string;
      routingNumber: string;
      AccountNumber: string;
      bankName: string;
      bankAddress: {
        addressLines: string;
        postcode: string;
        city: string;
        state: string;
        country: string;
        tags: {
          key: string;
          value: string;
        }[];
      };
      beneficiaryName: string;
      tags: {
        key: string;
        value: string;
      }[];
    };
    SWIFT: {
      method: string;
      swiftCode: string;
      AccountNumber: string;
      AccountType: string;
      bankName: string;
      name: string;
      bankAddress: {
        addressLines: string;
        postcode: string;
        city: string;
        state: string;
        country: string;
        tags: {
          key: string;
          value: string;
        }[];
      };
      specialInstructions: string;
      tags: {
        key: string;
        value: string;
      }[];
    };
    MPESA: {
      method: string;
      businessShortCode: string;
      transactionType: string;
      phoneNumber: string;
      tags: {
        key: string;
        value: string;
      }[];
    };
    UPI: {
      method: string;
      upiID: string;
      bankProvider: string;
      interfaceProvider: string;
      name: string;
      tags: {
        key: string;
        value: string;
      }[];
    };
    WALLET: {
      method: string;
      walletType: string;
      walletID: string;
      paymentChannel: string;
      name: string;
      walletPhoneNumber: string;
      walletBalance: {
        amountValue: string;
        amountCurrency: string;
      };
      tags: {
        key: string;
        value: string;
      }[];
    };
    CHECK: {
      method: string;
      checkNumber: string;
      checkIdentifier: string;
      deliveryStatus: string;
      etaTimestamp: string;
      name: string;
      shippingAddress: {
        addressLines: string;
        postcode: string;
        city: string;
        state: string;
        country: string;
        tags: {
          key: string;
          value: string;
        }[];
      };
      tags: {
        key: string;
        value: string;
      }[];
    };
  };
};

export default YourTransactionData2Type;

export interface GENERIC_BANK_ACCOUNT_model {
  method: string;
  accountNumber: string;
  accountType: string;
  bankName: string;
  bankCode: string;
  name: string;
  bankAddress: {
    addressLines: string;
    postcode: string;
    city: string;
    state: string;
    country: string;
    tags: {
      key: string;
      value: string;
    }[];
  };
  specialInstructions: string;
  paymentChannel: string;
  tags: {
    key: string;
    value: string;
  }[];
}

export  interface MerchantDetails {
  id: string;
  category: string;
  MCC: string;
  city: string;
  country: string;
  state: string;
  postCode: string;
}

export  interface NameOnCard {
  firstName: string;
  middleName: string;
  lastName: string;
}

export  interface CardExpiry {
  month: number;
  year: number;
}

export  interface Tag {
  key: string;
  value: string;
}

export interface CardDetails {
  method: string;
  cardFingerprint: string;
  cardIssuedCountry: string;
  transactionReferenceField: string;
  _3dsDone: boolean;
  nameOnCard: NameOnCard;
  CardExpiry: CardExpiry;
  cardLast4Digits: string;
  cardBrand: string;
  cardFunding: string;
  cardAuthenticated: string;
  paymentChannel: string;
  cardType: string;
  merchantDetails: MerchantDetails;
  tags: Tag[];
}
