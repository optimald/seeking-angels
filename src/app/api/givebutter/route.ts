import { NextRequest, NextResponse } from 'next/server';

// GiveButter API configuration
const GIVEBUTTER_API_KEY = process.env.GIVEBUTTER_API_KEY;
const GIVEBUTTER_CAMPAIGN_ID = process.env.GIVEBUTTER_CAMPAIGN_ID || 'seeking-angels-foundation';

export async function GET(request: NextRequest) {
  try {
    if (!GIVEBUTTER_API_KEY) {
      return NextResponse.json(
        { error: 'GiveButter API key not configured' },
        { status: 500 }
      );
    }

    // Fetch campaign data from GiveButter API
    const response = await fetch(`https://api.givebutter.com/v1/campaigns/${GIVEBUTTER_CAMPAIGN_ID}`, {
      headers: {
        'Authorization': `Bearer ${GIVEBUTTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`GiveButter API error: ${response.status}`);
    }

    const campaignData = await response.json();
    
    return NextResponse.json({
      success: true,
      campaign: campaignData,
    });

  } catch (error) {
    console.error('Error fetching campaign data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch campaign data' },
      { status: 500 }
    );
  }
}

// Handle GiveButter webhooks
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Verify webhook signature if needed
    // const signature = request.headers.get('x-givebutter-signature');
    
    console.log('GiveButter webhook received:', body);
    
    // Handle different webhook events
    switch (body.event_type) {
      case 'donation.created':
        console.log('New donation received:', body.data);
        // Process new donation
        break;
      case 'donation.updated':
        console.log('Donation updated:', body.data);
        // Process donation update
        break;
      default:
        console.log('Unhandled webhook event:', body.event_type);
    }
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}
