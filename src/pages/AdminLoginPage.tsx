import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { STORAGE_KEYS, IconLogo } from '../components/Shared';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPass = localStorage.getItem(STORAGE_KEYS.adminPassword) || 'pratyaksh2024';
    if (password === storedPass) {
      navigate('/admin');
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <IconLogo className="w-20 h-20 mx-auto mb-4" />
          <h1 className="font-serif-display text-3xl font-bold text-stone-900">Admin Login</h1>
          <p className="text-stone-500 mt-2">Enter your password to continue</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-stone-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none"
              placeholder="Enter admin password"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition-colors">
            Login
          </button>
        </form>
        <button onClick={() => navigate('/')} className="mt-4 w-full text-sm text-stone-500 hover:text-stone-700">
          ← Back to Website
        </button>
      </div>
    </div>
  );
}
