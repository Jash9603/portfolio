import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const apiKey = 're_QrM3WfKg_CchvyR9c52KuLFtGNiSEJ48r';
  const to = 'kevdiyajash@gmail.com';
  const subject = 'Portfolio-Contact';

  const emailBody = `
    <h2>New Portfolio Contact</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@jash.portfolio.com',
        to,
        subject,
        html: emailBody,
        reply_to: email,
      }),
    });
    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error: error.message || 'Failed to send email.' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
} 