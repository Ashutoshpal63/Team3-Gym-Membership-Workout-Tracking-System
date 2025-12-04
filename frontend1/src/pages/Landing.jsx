import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaUserShield, FaUserTie, FaDumbbell } from 'react-icons/fa';

const Landing = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRoleSelect = (role) => {
    login(role);
    navigate(`/${role}`);
  };

  return (
    <div className="landing-page">
      <div className="landing-hero">
        <FaDumbbell className="hero-icon" />
        <h1>FitTrack Pro</h1>
        <p>Your Complete Gym Management & Fitness Tracking System</p>
      </div>

      <div className="role-selection">
        <h2>Select Your Role</h2>
        <div className="role-cards">
          <div className="role-card" onClick={() => handleRoleSelect('member')}>
            <FaUser className="role-icon" />
            <h3>Member</h3>
            <p>Track workouts, view progress, book classes</p>
            <button className="btn-primary">Enter as Member</button>
          </div>

          <div className="role-card" onClick={() => handleRoleSelect('admin')}>
            <FaUserShield className="role-icon" />
            <h3>Admin</h3>
            <p>Manage members, view stats, handle operations</p>
            <button className="btn-primary">Enter as Admin</button>
          </div>

          <div className="role-card" onClick={() => handleRoleSelect('trainer')}>
            <FaUserTie className="role-icon" />
            <h3>Trainer</h3>
            <p>Manage clients, assign plans, track performance</p>
            <button className="btn-primary">Enter as Trainer</button>
          </div>
        </div>
      </div>

      <div className="landing-features">
        <div className="feature">
          <h3>Smart Attendance</h3>
          <p>QR-based check-in system with geo-fencing</p>
        </div>
        <div className="feature">
          <h3>Progress Analytics</h3>
          <p>Visual charts and insights for your fitness journey</p>
        </div>
        <div className="feature">
          <h3>Complete Management</h3>
          <p>Handle memberships, billing, and operations seamlessly</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
