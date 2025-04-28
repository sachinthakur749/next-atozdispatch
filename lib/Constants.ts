const prod = {
  API_URL: "https://payment.atozdispatch.com/api/",
};
const dev = {
  // API_URL: "http://a2z-dispatch-payment.test/api/",
  API_URL: "http://192.168.1.116:8000/api/",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
