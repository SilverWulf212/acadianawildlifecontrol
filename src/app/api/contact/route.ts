import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  phone: z.string().min(7).max(20),
  address: z.string().min(1).max(200),
  animalType: z.string().min(1),
  location: z.string().min(1),
  urgency: z.string().min(1),
  details: z.string().max(2000).optional(),
});

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
