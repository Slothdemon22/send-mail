import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/app/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Shaperzz <no-reply@tradenexusonline.com>',
      to: ['www.basilslothdemon@gmail.com'],
      subject: 'Hello basil kake!',
      react: EmailTemplate({ firstName: 'Hello tarnished One' }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
