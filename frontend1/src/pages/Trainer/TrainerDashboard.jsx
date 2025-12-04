import { useState } from 'react';
import { FaUsers, FaClipboardList, FaChartLine } from 'react-icons/fa';
import ClientManagement from '../../components/Trainer/ClientManagement';
import PlanBuilder from '../../components/Trainer/PlanBuilder';
import { useAuth } from '../../context/AuthContext';

const TrainerDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('clients');

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Trainer Dashboard</h1>
        <p>Manage your clients and create personalized plans</p>
      </div>

      <div className="dashboard-tabs">
        <button
          className={activeTab === 'clients' ? 'tab-active' : ''}
          onClick={() => setActiveTab('clients')}
        >
          <FaUsers /> My Clients
        </button>
        <button
          className={activeTab === 'plans' ? 'tab-active' : ''}
          onClick={() => setActiveTab('plans')}
        >
          <FaClipboardList /> Create Plan
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'clients' && <ClientManagement />}
        {activeTab === 'plans' && <PlanBuilder />}
      </div>
    </div>
  );
};

export default TrainerDashboard;
