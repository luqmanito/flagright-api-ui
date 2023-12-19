export const buttonsData = [
  {
    id: 1,
    label: "Verify a Transaction",
  },
  {
    id: 2,
    label: "Retrieve a Transaction",
  },
  {
    id: 3,
    label: "Create a Transaction Event",
  },
  {
    id: 4,
    label: "Create a Consumer User",
  },
  {
    id: 5,
    label: "Retrieve a Consumer User",
  },
  {
    id: 6,
    label: "Create a Business User",
  },
  {
    id: 7,
    label: "Retrieve a Business User",
  },
  {
    id: 8,
    label: "Create a Consumer User Event",
  },
  {
    id: 9,
    label: "Create a Business User Event",
  },
];

export const originPaymentDetails = {
  CARD: {
    method: "CARD",
    cardFingerprint: "20ac00fed8ef913aefb17cfae1097cce",
    cardIssuedCountry: "US",
    transactionReferenceField: "Deposit",
    _3dsDone: true,
    nameOnCard: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    CardExpiry: {
      month: 0,
      year: 0,
    },
    cardLast4Digits: "",
    cardBrand: "",
    cardFunding: "",
    cardAuthenticated: "",
    paymentChannel: "",
    cardType: "",
    merchantDetails: {
      id: "",
      category: "",
      MCC: "",
      city: "",
      country: "",
      state: "",
      postCode: "",
    },
    tags: {
      key: "",
      value: "",
    },
  },
  GENERIC_BANK_ACCOUNT: {
    method: "GENERIC_BANK_ACCOUNT",
    accountNumber: "",
    accountType: "",
    bankName: "",
    bankCode: "",
    name: "",
    bankAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    specialInstructions: "",
    paymentChannel: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  IBAN: {
    method: "IBAN",
    BIC: "",
    bankName: "",
    bankAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    country: "",
    IBAN: "",
    name: "",
    bankBranchCode: "",
    paymentChannel: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  ACH: {
    method: "ACH",
    routingNumber: "",
    AccountNumber: "",
    bankName: "",
    bankAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    beneficiaryName: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  SWIFT: {
    method: "SWIFT",
    swiftCode: "",
    AccountNumber: "",
    AccountType: "",
    bankName: "",
    name: "",
    bankAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    specialInstructions: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  MPESA: {
    method: "MPESA",
    businessShortCode: "",
    transactionType: "",
    phoneNumber: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  UPI: {
    method: "UPI",
    upiID: "",
    bankProvider: "",
    interfaceProvider: "",
    name: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  WALLET: {
    method: "WALLET",
    walletType: "",
    walletID: "",
    paymentChannel: "",
    name: "",
    walletPhoneNumber: "",
    walletBalance: {
      amountValue: "",
      amountCurrency: "",
    },
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  CHECK: {
    method: "CHECK",
    checkNumber: "",
    checkIdentifier: "",
    deliveryStatus: "",
    etaTimestamp: "",
    name: "",
    shippingAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
};
export const destinationPaymentDetails = {
  CARD: {
    method: "CARD",
    cardFingerprint: "20ac00fed8ef913aefb17cfae1097cce",
    cardIssuedCountry: "US",
    transactionReferenceField: "Deposit",
    _3dsDone: true,
    nameOnCard: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    CardExpiry: {
      month: 0,
      year: 0,
    },
    cardLast4Digits: "",
    cardBrand: "",
    cardFunding: "",
    cardAuthenticated: "",
    paymentChannel: "",
    cardType: "",
    merchantDetails: {
      id: "",
      category: "",
      MCC: "",
      city: "",
      country: "",
      state: "",
      postCode: "",
    },
    tags: {
      key: "",
      value: "",
    },
  },
  GENERIC_BANK_ACCOUNT: {
    method: "GENERIC_BANK_ACCOUNT",
    accountNumber: "",
    accountType: "",
    bankName: "",
    bankCode: "",
    name: "",
    bankAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    specialInstructions: "",
    paymentChannel: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  IBAN: {
    method: "IBAN",
    BIC: "",
    bankName: "",
    bankAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    country: "",
    IBAN: "",
    name: "",
    bankBranchCode: "",
    paymentChannel: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  ACH: {
    method: "ACH",
    routingNumber: "",
    AccountNumber: "",
    bankName: "",
    bankAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    beneficiaryName: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  SWIFT: {
    method: "SWIFT",
    swiftCode: "",
    AccountNumber: "",
    AccountType: "",
    bankName: "",
    name: "",
    bankAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    specialInstructions: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  MPESA: {
    method: "MPESA",
    businessShortCode: "",
    transactionType: "",
    phoneNumber: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  UPI: {
    method: "UPI",
    upiID: "",
    bankProvider: "",
    interfaceProvider: "",
    name: "",
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  WALLET: {
    method: "WALLET",
    walletType: "",
    walletID: "",
    paymentChannel: "",
    name: "",
    walletPhoneNumber: "",
    walletBalance: {
      amountValue: "",
      amountCurrency: "",
    },
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
  CHECK: {
    method: "CHECK",
    checkNumber: "",
    checkIdentifier: "",
    deliveryStatus: "",
    etaTimestamp: "",
    name: "",
    shippingAddress: {
      addressLines: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      tags: [
        {
          key: "",
          value: "",
        },
      ],
    },
    tags: [
      {
        key: "",
        value: "",
      },
    ],
  },
};
