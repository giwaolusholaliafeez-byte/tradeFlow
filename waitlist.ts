import type { NextApiRequest, NextApiResponse } from 'next';

// In-memory store (in production, this would be a database)
let waitlistStore: any[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  // Return the waitlist sorted by position
  const sorted = [...waitlistStore].sort((a, b) => a.waitlist_position - b.waitlist_position);
  return res.status(200).json(sorted);
}

// Export for other files to access
export { waitlistStore };
