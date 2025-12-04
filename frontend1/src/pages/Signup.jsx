import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserPlus } from 'react-icons/fa';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('member');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await register(name, email, password, role);
      // Redirect to role dashboard after signup
      navigate(`/${role}`);
    } catch (err) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: 480, background: 'white', padding: '2rem', borderRadius: 12 }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <FaUserPlus style={{ fontSize: '2.5rem', color: '#2563eb' }} />
          <h2>Create an account</h2>
          <p style={{ color: '#64748b' }}>Sign up to access your FitTrack Pro dashboard</p>
        </div>

        {error && <div style={{ background: '#fee2e2', padding: '0.5rem', borderRadius: 8, marginBottom: '1rem', color: '#ef4444' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: 8 }}>Full name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '0.5rem', marginBottom: '0.75rem' }} />

          <label style={{ display: 'block', marginBottom: 8 }}>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '0.5rem', marginBottom: '0.75rem' }} />

          <label style={{ display: 'block', marginBottom: 8 }}>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '0.5rem', marginBottom: '0.75rem' }} />

          <label style={{ display: 'block', marginBottom: 8 }}>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}>
            <option value="member">Member</option>
            <option value="trainer">Trainer</option>
          </select>

          <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.75rem', background: '#2563eb', color: 'white', borderRadius: 8 }}>
            {loading ? 'Creating...' : 'Create account'}
          </button>
        </form>

        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <small>
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </div>
      </div>
    </div>
  );
}
