import { NextResponse } from 'next/server';

// GiveButter API configuration
const GIVEBUTTER_API_KEY = process.env.GIVEBUTTER_API_KEY;
const GIVEBUTTER_CAMPAIGN_ID = process.env.GIVEBUTTER_CAMPAIGN_ID || 'seeking-angels-foundation';

export async function POST(request: Request) {
  try {
    if (!GIVEBUTTER_API_KEY) {
      return NextResponse.json(
        { error: 'GiveButter API key not configured' },
        { status: 500 }
      );
    }

    const donationData = await request.json();
    
    // Validate required fields
    if (!donationData.amount || !donationData.donor?.email || !donationData.donor?.first_name) {
      return NextResponse.json(
        { error: 'Missing required donation fields' },
        { status: 400 }
      );
    }

    // Create donation payload for GiveButter API
    const payload = {
      campaign_id: donationData.campaign_id || GIVEBUTTER_CAMPAIGN_ID,
      amount: donationData.amount,
      donor: {
        first_name: donationData.donor.first_name,
        last_name: donationData.donor.last_name || '',
        email: donationData.donor.email,
      },
      comment: donationData.comment || '',
      payment_method: donationData.payment_method || 'card',
      // Add metadata
      metadata: {
        source: 'website',
        timestamp: new Date().toISOString(),
      }
    };

    // Call GiveButter API to create donation
    const response = await fetch('https://api.givebutter.com/v1/donations', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${GIVEBUTTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GiveButter API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create donation', details: errorData },
        { status: response.status }
      );
    }

    const result = await response.json();
    
    // Return the donation data with payment URL if available
    return NextResponse.json({
      success: true,
      donation_id: result.id,
      payment_url: result.payment_url,
      amount: result.amount,
      message: 'Donation created successfully'
    });

  } catch (error) {
    console.error('Donation API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
