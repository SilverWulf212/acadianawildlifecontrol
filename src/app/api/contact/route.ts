import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs and try again.' },
        { status: 400 },
      );
    }

    const data = result.data;

    // Reject honeypot submissions silently
    if (data.honeypot) {
      // Return success to not tip off bots, but do nothing
      return NextResponse.json({ success: true });
    }

    // Log the submission (email integration can be added later)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(`Name:     ${data.name}`);
    console.log(`Phone:    ${data.phone}`);
    console.log(`Address:  ${data.address}`);
    console.log(`Animal:   ${data.animalType}`);
    console.log(`Location: ${data.location}`);
    console.log(`Urgency:  ${data.urgency}`);
    console.log(`Details:  ${data.details || '(none)'}`);
    console.log(`Time:     ${new Date().toISOString()}`);
    console.log('===================================');

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    );
  }
}
