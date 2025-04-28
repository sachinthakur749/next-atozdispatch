"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const StripeKeyWrapper = ({ children }) => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeKeyWrapper;
