import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaUsers, FaDollarSign, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { adminStats, attendanceData } from '../../data/mockData';

const StatsOverview = () => {
  const revenueData = [
    { month: 'Jul', revenue: 18500 },
    { month: 'Aug', revenue: 20100 },
    { month: 'Sep', revenue: 21800 },
    { month: 'Oct', revenue: 22400 },
    { month: 'Nov', revenue: 23200 },
    { month: 'Dec', revenue: 23450 }
  ];

  return (
    <div className="stats-overview">
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <FaUsers className="admin-stat-icon users" />
          <div className="admin-stat-info">
            <h3>Active Members</h3>
            <p className="admin-stat-value">{adminStats.activeMembers}</p>
            <p className="admin-stat-change positive">+12 this month</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <FaDollarSign className="admin-stat-icon revenue" />
          <div className="admin-stat-info">
            <h3>Monthly Revenue</h3>
            <p className="admin-stat-value">${adminStats.revenue.toLocaleString()}</p>
            <p className="admin-stat-change positive">+8% vs last month</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <FaCheckCircle className="admin-stat-icon checkin" />
          <div className="admin-stat-info">
            <h3>Check-ins Today</h3>
            <p className="admin-stat-value">{adminStats.checkInsToday}</p>
            <p className="admin-stat-change">Peak: 8:00 AM</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <FaExclamationTriangle className="admin-stat-icon warning" />
          <div className="admin-stat-info">
            <h3>Expiring Soon</h3>
            <p className="admin-stat-value">{adminStats.expiringThisMonth}</p>
            <p className="admin-stat-change">This month</p>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h3>Weekly Attendance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3b82f6" name="Check-ins" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} name="Revenue ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="insights-section">
        <h3>Key Insights</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <h4>Peak Hours</h4>
            <p>Most members check in between 6-8 AM and 6-8 PM</p>
          </div>
          <div className="insight-card">
            <h4>Popular Plans</h4>
            <p>65% of members prefer annual memberships</p>
          </div>
          <div className="insight-card">
            <h4>Retention Rate</h4>
            <p>92% member retention rate this quarter</p>
          </div>
          <div className="insight-card">
            <h4>Revenue Growth</h4>
            <p>Consistent 8% month-over-month growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
