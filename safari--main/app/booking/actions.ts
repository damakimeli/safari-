"use server";

import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

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

  redirect(`/booking/confirm?bookingId=${data}`);
}