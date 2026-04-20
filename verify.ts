import type { NextApiRequest, NextApiResponse } from 'next';
import { waitlistStore } from './admin/waitlist';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token, email } = req.body;

  if (!token || !email) {
    return res.status(400).json({ error: 'Missing verification data' });
  }

  try {
    // Find the entry
    const entry = waitlistStore.find((w: any) => w.email === email && w.verification_token === token);
    
    if (!entry) {
      return res.status(400).json({ error: 'Invalid or expired verification token' });
    }

    if (entry.verified) {
      return res.status(400).json({ error: 'Email already verified' });
    }

    // Update to verified
    entry.verified = true;
    entry.verified_at = new Date().toISOString();
    
    // Update position
    const verifiedCount = waitlistStore.filter((w: any) => w.verified).length;
    entry.waitlist_position = verifiedCount;

    console.log(`✅ Email verified: ${email} (Position #${entry.waitlist_position})`);

    return res.status(200).json({ 
      success: true, 
      message: `Email verified successfully! You are #${entry.waitlist_position} on the waitlist.` 
    });

  } catch (error) {
    console.error('Verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
