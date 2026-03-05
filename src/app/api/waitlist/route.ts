import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendAudienceId = process.env.RESEND_AUDIENCE_ID;

    if (!resendApiKey || !resendAudienceId) {
      console.error('Missing RESEND_API_KEY or RESEND_AUDIENCE_ID environment variables');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Add contact to Resend audience using REST API
    const response = await fetch(
      `https://api.resend.com/audiences/${resendAudienceId}/contacts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Resend API error:', response.status, errorData);

      // Handle duplicate email (Resend returns 400 for duplicates)
      if (response.status === 400 && errorData.message?.includes('already exists')) {
        return NextResponse.json(
          { success: true, message: 'Email already on waitlist' },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { success: false, error: 'Failed to add email to waitlist' },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Successfully added contact to Resend:', data);

    return NextResponse.json(
      { success: true, message: 'Successfully joined waitlist' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
