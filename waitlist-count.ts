import type { NextApiRequest, NextApiResponse } from 'next';
import { waitlistStore } from './admin/waitlist';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const verifiedCount = waitlistStore.filter((w: any) => w.verified).length;
    return res.status(200).json({ count: verifiedCount });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to get count' });
  }
}
