import axiosClient from "@/app/Network/axiosClient";

const TransactionApi = {
  create(data: any) {
    return axiosClient.post("/transactions", data);
  },
  getTransaction(id: string) {
    return axiosClient.get(`/transactions/${id}`);
  },
  createTransactionEvent(data: any) {
    return axiosClient.post("/events/transaction", data);
  },
  createConsumerUser(data: any) {
    return axiosClient.post("/consumer/users", data);
  },
  getConsumerUser(id: string) {
    return axiosClient.get(`/consumer/users/${id}`);
  },
  createBusinessUser(data: any) {
    return axiosClient.post("/business/users", data);
  },
  getBusinessUser(id: string) {
    return axiosClient.get(`/business/users/${id}`);
  },
  createConsumerUserEvent(data: any) {
    return axiosClient.post("events/consumer/user", data);
  },
  createBusinessUserEvent(data: any) {
    return axiosClient.post("events/business/user", data);
  },
};

export default TransactionApi;
