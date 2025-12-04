import { useState } from 'react';
import { FaQrcode, FaDumbbell, FaChartLine, FaCalendarAlt, FaCreditCard, FaFire } from 'react-icons/fa';
import CheckIn from '../../components/Member/CheckIn';
import WorkoutLogger from '../../components/Member/WorkoutLogger';
import ProgressTracker from '../../components/Member/ProgressTracker';
import ClassBooking from '../../components/Member/ClassBooking';
import PlanPurchase from '../../components/Member/PlanPurchase';
import { useAuth } from '../../context/AuthContext';

const MemberDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const getDaysRemaining = () => {
    const end = new Date(user.membershipEnd);
    const today = new Date();
    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    return diff;
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, {user.name}!</h1>
        <p>Let's crush your fitness goals today</p>
      </div>

      <div className="dashboard-tabs">
        <button
          className={activeTab === 'overview' ? 'tab-active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          <FaChartLine /> Overview
        </button>
        <button
          className={activeTab === 'checkin' ? 'tab-active' : ''}
          onClick={() => setActiveTab('checkin')}
        >
          <FaQrcode /> Check-In
        </button>
        <button
          className={activeTab === 'workout' ? 'tab-active' : ''}
          onClick={() => setActiveTab('workout')}
        >
          <FaDumbbell /> Log Workout
        </button>
        <button
          className={activeTab === 'progress' ? 'tab-active' : ''}
          onClick={() => setActiveTab('progress')}
        >
          <FaChartLine /> Progress
        </button>
        <button
          className={activeTab === 'booking' ? 'tab-active' : ''}
          onClick={() => setActiveTab('booking')}
        >
          <FaCalendarAlt /> Book Class
        </button>
        <button
          className={activeTab === 'plans' ? 'tab-active' : ''}
          onClick={() => setActiveTab('plans')}
        >
          <FaCreditCard /> Plans
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="stats-grid">
              <div className="stat-card">
                <FaFire className="stat-icon fire" />
                <div className="stat-info">
                  <h3>Current Streak</h3>
                  <p className="stat-value">12 days</p>
                </div>
              </div>
              <div className="stat-card">
                <FaDumbbell className="stat-icon muscle" />
                <div className="stat-info">
                  <h3>Workouts This Month</h3>
                  <p className="stat-value">18 sessions</p>
                </div>
              </div>
              <div className="stat-card">
                <FaCalendarAlt className="stat-icon calendar" />
                <div className="stat-info">
                  <h3>Membership Expires</h3>
                  <p className="stat-value">{getDaysRemaining()} days</p>
                </div>
              </div>
            </div>

            <div className="membership-card">
              <div className="membership-info">
                <h3>{user.membershipType}</h3>
                <p>Valid until {new Date(user.membershipEnd).toLocaleDateString()}</p>
                <div className="membership-status">
                  <span className="status-badge active">Active</span>
                </div>
              </div>
            </div>

            <div className="quick-actions">
              <h3>Quick Actions</h3>
              <div className="action-grid">
                <button className="action-btn" onClick={() => setActiveTab('checkin')}>
                  <FaQrcode />
                  <span>Check-In Now</span>
                </button>
                <button className="action-btn" onClick={() => setActiveTab('workout')}>
                  <FaDumbbell />
                  <span>Log Workout</span>
                </button>
                <button className="action-btn" onClick={() => setActiveTab('booking')}>
                  <FaCalendarAlt />
                  <span>Book Class</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'checkin' && <CheckIn />}
        {activeTab === 'workout' && <WorkoutLogger />}
        {activeTab === 'progress' && <ProgressTracker />}
        {activeTab === 'booking' && <ClassBooking />}
        {activeTab === 'plans' && <PlanPurchase />}
      </div>
    </div>
  );
};

export default MemberDashboard;
