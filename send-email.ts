import type { NextApiRequest, NextApiResponse } from 'next';
import { waitlistStore } from './waitlist';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { emails, subject, content } = req.body;
  
  if (!emails || !emails.length || !subject || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // In production, this would send actual emails via Resend/SendGrid
  console.log('\n========================================');
  console.log('📧 EMAIL CAMPAIGN');
  console.log('========================================');
  console.log(`To: ${emails.join(', ')}`);
  console.log(`Subject: ${subject}`);
  console.log(`Content:\n${content}`);
  console.log('========================================\n');
  
  // For demo, we'll just log the emails
  // In production, use Resend or SendGrid API
  
  return res.status(200).json({ 
    success: true, 
    message: `Email campaign sent to ${emails.length} recipients (simulated - check terminal for details)` 
  });
}
