import { Resend } from "resend";
import { NextResponse } from "next/server";

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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

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
    const safe = {
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      interest: escapeHtml(interest),
      message: escapeHtml(message).replaceAll("\n", "<br />"),
    };

    const adminResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      replyTo: email,
      subject: `New enquiry — ${name} (${interest})`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#0c1b33">
          <h2 style="margin:0 0 12px;color:#062a5c">New website enquiry</h2>
          <p style="margin:0 0 16px">A customer submitted the contact form on primeautointernational.com.</p>
          <table style="border-collapse:collapse;width:100%;max-width:560px">
            <tr><td style="padding:8px 0;font-weight:bold;width:120px">Name</td><td style="padding:8px 0">${safe.name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Phone</td><td style="padding:8px 0">${safe.phone}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Email</td><td style="padding:8px 0">${safe.email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Interest</td><td style="padding:8px 0">${safe.interest}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px 0">${safe.message}</td></tr>
          </table>
        </div>
      `,
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
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#0c1b33">
          <h2 style="margin:0 0 12px;color:#062a5c">Thank you, ${safe.name}</h2>
          <p style="margin:0 0 12px">
            We received your enquiry about <strong>${safe.interest}</strong>.
            Our team will contact you shortly.
          </p>
          <p style="margin:0 0 12px"><strong>Your message:</strong><br />${safe.message}</p>
          <p style="margin:24px 0 0;font-size:13px;color:#5a6f88">
            Prime Auto International (Pvt) Ltd.<br />
            Colombo Road, Kurunegala, Sri Lanka<br />
            Tel: 076 893 1709 · 075 909 4211 · 076 171 8046
          </p>
        </div>
      `,
    });

    if (customerResult.error) {
      // Admin mail already sent — still treat as success for the visitor.
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
