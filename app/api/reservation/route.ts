import { NextResponse } from "next/server";
import { sendReservationEmail } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, phone, email, checkIn, checkOut, rvType, ageOfRv } = body;

    if (!firstName || !lastName || !phone || !email || !checkIn || !checkOut || !rvType || !ageOfRv) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    await sendReservationEmail(body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send reservation request" },
      { status: 500 }
    );
  }
}
