import { EnquiryAdminAlertEmail } from "@/emails/EnquiryAdminAlertEmail";
import { EnquiryConfirmationEmail } from "@/emails/EnquiryConfirmationEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const ADMIN_EMAIL = "Primeautointpvtltd@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ??
  "Prime Auto International <enquiries@primeautointernational.com>";

type ContactBody = {
  name?: string;
  phone?: string;
  email?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const interest = body.interest?.trim() ?? "General enquiry";
    const message = body.message?.trim() ?? "";

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in name, phone, email, and message." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const adminResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      replyTo: email,
      subject: `New enquiry — ${name} (${interest})`,
      react: EnquiryAdminAlertEmail({
        name,
        phone,
        email,
        interest,
        message,
      }),
    });

    if (adminResult.error) {
      return NextResponse.json(
        { error: adminResult.error.message || "Failed to notify the team." },
        { status: 502 },
      );
    }

    const customerResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "We received your enquiry — Prime Auto International",
      react: EnquiryConfirmationEmail({
        name,
        interest,
        message,
      }),
    });

    if (customerResult.error) {
      console.error("Customer confirmation failed:", customerResult.error);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us." },
      { status: 500 },
    );
  }
}
