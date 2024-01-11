// TransactionModel.ts
export interface TransactionModel {
  transactionId: string;
  type: string;
  timestamp: number;
  originPaymentDetails: object;
}
export interface MpesaModel {
  businessShortCode: string;
  transactionType: string;
  phoneNumber: string;
}
