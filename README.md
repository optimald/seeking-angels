# Seeking Angels Foundation Website

A modern Next.js website for the Seeking Angels Foundation, dedicated to supporting First Responders through healing retreats and C-PTSD support programs.

## Features

- **Homepage**: Hero section, mission overview, and donation progress
- **Mission Page**: Detailed information about C-PTSD support and First Responder programs
- **Calendar Page**: Interactive flight schedule (LAX to Loreto, BCS) with booking system
- **Donation Page**: Integrated GiveButter donation widget and progress tracking
- **Contact Page**: Contact form, FAQ, and emergency resources

## GiveButter Integration

This website integrates with [GiveButter](https://docs.givebutter.com/reference/reference-getting-started) for secure donation processing and campaign management.

### Setup Instructions

1. **Create GiveButter Account**
   - Sign up at [givebutter.com](https://givebutter.com)
   - Create a campaign for "Seeking Angels Foundation"

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your GiveButter credentials:
   ```
   GIVEBUTTER_API_KEY=your_api_key_here
   GIVEBUTTER_CAMPAIGN_ID=your_campaign_id
   NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_ID=your_campaign_id
   ```

3. **Get API Key**
   - Log into your GiveButter dashboard
   - Navigate to Settings > API
   - Generate a new API key
   - Add it to your environment variables

4. **Configure Webhooks** (Optional)
   - In GiveButter dashboard, go to Settings > Webhooks
   - Add webhook URL: `https://yourdomain.com/api/givebutter`
   - Select events: `donation.created`, `donation.updated`

### GiveButter Features Used

- **Embedded Donation Widget**: Secure iframe integration
- **Campaign API**: Real-time progress tracking
- **Webhook Integration**: Automatic donation processing
- **Tax-Deductible Receipts**: Automatic email receipts

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

The website is configured for deployment on Vercel with automatic GitHub integration.

### Vercel Environment Variables

Add these environment variables in your Vercel dashboard:

- `GIVEBUTTER_API_KEY`
- `GIVEBUTTER_CAMPAIGN_ID`
- `NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_ID`

## Flight Schedule

The calendar page features:
- **Route**: LAX (Los Angeles) to LTO (Loreto, Baja California Sur)
- **Frequency**: Every Thursday
- **Capacity**: 2 groups of 4-6 people per week
- **Duration**: 52 weeks per year
- **Activities**: Therapeutic retreats, mindfulness training, community support

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Donations**: GiveButter API integration
- **Deployment**: Vercel
- **Version Control**: GitHub

## Support

For technical support or questions about the GiveButter integration, please refer to:
- [GiveButter API Documentation](https://docs.givebutter.com/reference/reference-getting-started)
- [Next.js Documentation](https://nextjs.org/docs)

## License

© 2024 Seeking Angels Foundation. All rights reserved.