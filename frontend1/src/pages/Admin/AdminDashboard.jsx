import { useState } from 'react';
import { FaChartBar, FaUsers, FaBell, FaTools } from 'react-icons/fa';
import StatsOverview from '../../components/Admin/StatsOverview';
import MemberManagement from '../../components/Admin/MemberManagement';
import EquipmentManagement from '../../components/Admin/EquipmentManagement';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('stats');

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Manage your gym operations efficiently</p>
      </div>

      <div className="dashboard-tabs">
        <button
          className={activeTab === 'stats' ? 'tab-active' : ''}
          onClick={() => setActiveTab('stats')}
        >
          <FaChartBar /> Statistics
        </button>
        <button
          className={activeTab === 'members' ? 'tab-active' : ''}
          onClick={() => setActiveTab('members')}
        >
          <FaUsers /> Members
        </button>
        <button
          className={activeTab === 'equipment' ? 'tab-active' : ''}
          onClick={() => setActiveTab('equipment')}
        >
          <FaTools /> Equipment
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'stats' && <StatsOverview />}
        {activeTab === 'members' && <MemberManagement />}
        {activeTab === 'equipment' && <EquipmentManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;
