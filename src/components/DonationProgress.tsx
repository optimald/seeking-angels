"use client";

import { useState, useEffect } from 'react';

interface CampaignData {
  id: string;
  name: string;
  goal: number;
  raised: number;
  donor_count: number;
  status: string;
}

export default function DonationProgress() {
  const [campaignData, setCampaignData] = useState<CampaignData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const response = await fetch('/api/givebutter');
        const data = await response.json();
        
        if (data.success) {
          setCampaignData(data.campaign);
        } else {
          setError('Failed to load campaign data');
        }
      } catch (err) {
        setError('Error loading campaign data');
        console.error('Error fetching campaign data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaignData();
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchCampaignData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !campaignData) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Support Our Heroes
        </h3>
        <p className="text-gray-600">
          {error || 'Unable to load campaign data. Please try again later.'}
        </p>
      </div>
    );
  }

  const progressPercentage = Math.min((campaignData.raised / campaignData.goal) * 100, 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        {campaignData.name}
      </h3>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-2xl font-bold text-green-600">
            ${campaignData.raised.toLocaleString()}
          </span>
          <span className="text-gray-600">
            Goal: ${campaignData.goal.toLocaleString()}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-green-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <span>{progressPercentage.toFixed(1)}% funded</span>
          <span>{campaignData.donor_count} donors</span>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Every dollar helps us support First Responders in their healing journey.
        </p>
        <a
          href={`https://givebutter.com/${campaignData.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
}
