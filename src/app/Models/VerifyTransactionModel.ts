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
