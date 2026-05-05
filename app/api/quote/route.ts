import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  firstName:    z.string().min(1),
  lastName:     z.string().min(1),
  email:        z.string().email(),
  phone:        z.string().optional(),
  organization: z.string().min(1),
  jobTitle:     z.string().optional(),
  products:     z.string().min(1),
  quantity:     z.string().optional(),
  timeline:     z.string().optional(),
  notes:        z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body   = await request.json();
    const result = quoteSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Validation failed", details: result.error.issues }, { status: 400 });
    }

    const data = result.data;

    // Forward to webhook if configured
    const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          source:    "BT Engine Lab — Quote Form",
          timestamp: new Date().toISOString(),
          ...data,
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
