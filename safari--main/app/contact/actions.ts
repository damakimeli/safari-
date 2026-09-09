"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  await resend.emails.send({
    from: "Adventures of Letoluo <onboarding@resend.dev>",
    to: "damariskimeli664@gmail.com",
    subject: `New enquiry from ${name}`,
    text: `From: ${name} (${email})\n\n${message}`,
  });

  return { success: true };
}