import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface WaitlistEntry {
  id: number;
  email: string;
  verified: boolean;
  verified_at?: string;
  waitlist_position: number;
  created_at: string;
}

export default function AdminDashboard() {
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState('');
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('admin_authenticated');
    if (!isAuthenticated) {
      router.push('/admin/login');
      return;
    }
    
    fetchWaitlist();
  }, []);

  const fetchWaitlist = async () => {
    try {
      const response = await fetch('/api/admin/waitlist');
      const data = await response.json();
      setWaitlist(data);
    } catch (error) {
      console.error('Failed to fetch waitlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    router.push('/admin/login');
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(waitlist.map(w => w.email));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectEmail = (email: string) => {
    if (selectedEmails.includes(email)) {
      setSelectedEmails(selectedEmails.filter(e => e !== email));
    } else {
      setSelectedEmails([...selectedEmails, email]);
    }
  };

  const handleSendEmail = async () => {
    if (!emailSubject || !emailContent) {
      setEmailStatus('Please fill in both subject and content');
      return;
    }
    
    if (selectedEmails.length === 0) {
      setEmailStatus('Please select at least one recipient');
      return;
    }
    
    setSendingEmail(true);
    setEmailStatus('Sending emails...');
    
    try {
      const response = await fetch('/api/admin/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: selectedEmails,
          subject: emailSubject,
          content: emailContent
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setEmailStatus(`✅ ${data.message}`);
        setEmailSubject('');
        setEmailContent('');
        setSelectedEmails([]);
        setSelectAll(false);
      } else {
        setEmailStatus(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setEmailStatus('❌ Failed to send emails');
    } finally {
      setSendingEmail(false);
      setTimeout(() => setEmailStatus(''), 5000);
    }
  };

  const handleDeleteEntry = async (email: string) => {
    if (!confirm(`Are you sure you want to delete ${email}?`)) return;
    
    try {
      const response = await fetch('/api/admin/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        fetchWaitlist();
      }
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  const verifiedCount = waitlist.filter(w => w.verified).length;
  const unverifiedCount = waitlist.filter(w => !w.verified).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#00D4FF] border-t-transparent"></div>
          <p className="text-gray-400 mt-4">Loading waitlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#050507]">
      {/* Admin Navigation */}
      <nav className="bg-[#111114] border-b border-[#1A1A1F] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="text-gray-400 hover:text-white transition">View Site</Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#111114] border border-[#1A1A1F] rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#00D4FF]">{waitlist.length}</div>
            <div className="text-gray-400 text-sm mt-1">Total Subscribers</div>
          </div>
          <div className="bg-[#111114] border border-[#1A1A1F] rounded-2xl p-6">
            <div className="text-3xl font-bold text-green-500">{verifiedCount}</div>
            <div className="text-gray-400 text-sm mt-1">Verified</div>
          </div>
          <div className="bg-[#111114] border border-[#1A1A1F] rounded-2xl p-6">
            <div className="text-3xl font-bold text-yellow-500">{unverifiedCount}</div>
            <div className="text-gray-400 text-sm mt-1">Unverified</div>
          </div>
          <div className="bg-[#111114] border border-[#1A1A1F] rounded-2xl p-6">
            <div className="text-3xl font-bold text-purple-500">{selectedEmails.length}</div>
            <div className="text-gray-400 text-sm mt-1">Selected for Email</div>
          </div>
        </div>

        {/* Email Campaign Section */}
        <div className="bg-[#111114] border border-[#1A1A1F] rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">📧 Send Email Campaign</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className="w-full px-4 py-3 bg-[#0A0A0F] border border-[#1A1A1F] rounded-xl text-white focus:outline-none focus:border-[#00D4FF]"
                placeholder="Email subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
              <textarea
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-[#0A0A0F] border border-[#1A1A1F] rounded-xl text-white focus:outline-none focus:border-[#00D4FF]"
                placeholder="Write your email content here..."
              />
            </div>
            {emailStatus && (
              <div className={`p-3 rounded-lg ${
                emailStatus.includes('✅') ? 'bg-green-500/10 border border-green-500/30 text-green-500' :
                emailStatus.includes('❌') ? 'bg-red-500/10 border border-red-500/30 text-red-500' :
                'bg-blue-500/10 border border-blue-500/30 text-blue-500'
              }`}>
                <p className="text-sm">{emailStatus}</p>
              </div>
            )}
            <button
              onClick={handleSendEmail}
              disabled={sendingEmail}
              className="w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-xl font-semibold text-white hover:opacity-90 disabled:opacity-50"
            >
              {sendingEmail ? 'Sending...' : `Send to ${selectedEmails.length} recipient(s)`}
            </button>
          </div>
        </div>

        {/* Waitlist Table */}
        <div className="bg-[#111114] border border-[#1A1A1F] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0A0A0F] border-b border-[#1A1A1F]">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-[#1A1A1F] bg-[#0A0A0F] text-[#00D4FF] focus:ring-[#00D4FF]"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Position</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1F]">
                {waitlist.map((entry) => (
                  <tr key={entry.id} className="hover:bg-[#0A0A0F]/50 transition">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedEmails.includes(entry.email)}
                        onChange={() => handleSelectEmail(entry.email)}
                        className="w-4 h-4 rounded border-[#1A1A1F] bg-[#0A0A0F] text-[#00D4FF] focus:ring-[#00D4FF]"
                      />
                    </td>
                    <td className="px-6 py-4 text-white">#{entry.waitlist_position}</td>
                    <td className="px-6 py-4 text-white">{entry.email}</td>
                    <td className="px-6 py-4">
                      {entry.verified ? (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Verified</span>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Pending</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">
                      {new Date(entry.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteEntry(entry.email)}
                        className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm hover:bg-red-500/30 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {waitlist.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No waitlist entries yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
