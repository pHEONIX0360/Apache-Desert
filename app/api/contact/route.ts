import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, company, matter } = body;

    // Validate required fields
    if (!email || !name || !matter) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const msg = {
      to: 'joesonstanes1360@gmail.com', // your receiving email
      from: 'noreply@apachedesert.com', // your verified sender
      replyTo: email, // the user's email from the form
      subject: `Contact Form: ${name}${company ? ` from ${company}` : ''}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nMessage: ${matter}`,
      html: `<h2>New Contact Form Submission</h2>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Company:</strong> ${company || 'Not provided'}</p>
         <p><strong>Message:</strong></p>
         <p>${matter.replace(/\n/g, '<br>')}</p>`
    };

    // Send email via SendGrid
    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 