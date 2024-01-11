import axiosClient from "@/app/Network/axiosClient";

const TransactionApi = {
  create(data: any) {
    return axiosClient.post("/transactions", data);
  },
  getTransaction(id: string, transactionId: any) {
    console.log(transactionId);

    return axiosClient.get(`/transactions/${id}`, transactionId);
  },
  createTransactionEvent(data: any) {
    return axiosClient.post("/events/transaction", data);
  },
  createConsumerUser(data: any) {
    return axiosClient.post("/consumer/users", data);
  },
  getConsumerUser(id: string, consumerUser: any) {
    return axiosClient.get(`/consumer/users/${id}`, consumerUser);
  },
  createBusinessUser(data: any) {
    return axiosClient.post("/business/users", data);
  },
  getBusinessUser(id: string, userBusinessId: any) {
    return axiosClient.get(`/business/users/${id}`, userBusinessId);
  },
  createConsumerUserEvent(data: any) {
    return axiosClient.post("events/consumer/user", data);
  },
  createBusinessUserEvent(data: any) {
    return axiosClient.post("events/business/user", data);
  },
};

export default TransactionApi;
