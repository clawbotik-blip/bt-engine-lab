import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name:    z.string().min(1),
  org:     z.string().optional(),
  email:   z.string().email(),
  phone:   z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body   = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Validation failed", details: result.error.issues }, { status: 400 });
    }

    const data = result.data;

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          source:    "BT Engine Lab — Contact Form",
          timestamp: new Date().toISOString(),
          ...data,
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
