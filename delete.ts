import type { NextApiRequest, NextApiResponse } from 'next';
import { waitlistStore } from './waitlist';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { email } = req.body;
  
  const index = waitlistStore.findIndex((w: any) => w.email === email);
  if (index !== -1) {
    waitlistStore.splice(index, 1);
    // Recalculate positions
    waitlistStore.forEach((entry, idx) => {
      entry.waitlist_position = idx + 1;
    });
  }
  
  return res.status(200).json({ success: true });
}
