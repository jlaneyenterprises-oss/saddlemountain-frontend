import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, phone, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
