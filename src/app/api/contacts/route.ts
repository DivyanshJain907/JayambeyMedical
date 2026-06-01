import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import dbConnect from '@/lib/mongodb';
import { Contact } from '@/models/Contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: NextRequest) {
  try {
    const adminSecret = request.headers.get('x-admin-secret');
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Add timeout to database connection
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Database connection timeout')), 5000)
    );
    
    await Promise.race([dbConnect(), timeoutPromise]);
    
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (error: any) {
    console.error('Contacts API Error:', error.message);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Add timeout to database connection
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Database connection timeout')), 5000)
    );
    
    await Promise.race([dbConnect(), timeoutPromise]);
    
    const body = await request.json();

    // Send email using Resend
    await resend.emails.send({
      from: 'noreply@radheysteels.com',
      to: process.env.CONTACT_EMAIL || 'info.rrss.co@gmail.com',
      subject: `New Contact Message from ${body.name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    // Save to database
    const contact = new Contact(body);
    await contact.save();

    return NextResponse.json(contact, { status: 201 });
  } catch (error: any) {
    console.error('Contacts POST Error:', error.message);
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
