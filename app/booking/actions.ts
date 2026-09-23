"use server";

import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function reserveBooking(formData: FormData) {
  const packageSlug = formData.get("packageSlug") as string;
  const startDate = formData.get("startDate") as string;
  const guestName = formData.get("guestName") as string;
  const guestEmail = formData.get("guestEmail") as string;

  const { data, error } = await supabase.rpc("create_package_hold", {
    p_package_slug: packageSlug,
    p_start_date: startDate,
    p_guest_name: guestName,
    p_guest_email: guestEmail,
  });

  if (error) {
    redirect(`/booking?package=${packageSlug}&error=${encodeURIComponent(error.message)}`);
  }

  // Notify admin by email that a new booking hold was created
  await resend.emails.send({
    from: "Letoluo Safari <onboarding@resend.dev>",
    to: "info@adventureofletoluo.co.ke",
    subject: `New booking request: ${packageSlug}`,
    text: `A new booking hold was created.\n\nPackage: ${packageSlug}\nStart date: ${startDate}\nGuest: ${guestName} (${guestEmail})\nBooking ID: ${data}\n\nThe date has already passed the availability check, so this is confirmed as bookable — the guest is now on the payment page.`,
  });

  redirect(`/booking/confirm?bookingId=${data}`);
}