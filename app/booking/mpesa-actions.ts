"use server";

import { getMpesaToken } from "@/lib/mpesa";

export async function initiateMpesaPayment(phone: string, amount: number, bookingId: string) {
  const token = await getMpesaToken();

  const timestamp = new Date()
    .toISOString()
    .replace(/[^0-9]/g, "")
    .slice(0, 14);

  const password = Buffer.from(
    `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
  ).toString("base64");

  const formattedPhone = phone.startsWith("0")
    ? "254" + phone.slice(1)
    : phone;

  const res = await fetch(
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: formattedPhone,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: formattedPhone,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: bookingId,
        TransactionDesc: "Dusty Roads booking payment",
      }),
    }
  );

  const text = await res.text();
  console.log("MPESA STK RESPONSE:", text);
  const data = JSON.parse(text);
  return data;
}