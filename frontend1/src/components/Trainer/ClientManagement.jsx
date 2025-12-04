import { useState } from 'react';
import { FaUser, FaBullseye, FaChartLine, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { trainerClients } from '../../data/mockData';

const ClientManagement = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clientProgressData = [
    { week: 'Week 1', progress: 20 },
    { week: 'Week 2', progress: 35 },
    { week: 'Week 3', progress: 50 },
    { week: 'Week 4', progress: 65 },
    { week: 'Week 5', progress: 75 }
  ];

  return (
    <div className="client-management">
      <div className="clients-header">
        <h2>My Clients</h2>
        <p>Track and manage your client progress</p>
      </div>

      <div className="clients-grid">
        {trainerClients.map((client) => (
          <div
            key={client.id}
            className="client-card"
            onClick={() => setSelectedClient(client)}
          >
            <div className="client-avatar-large">
              <img src={client.avatar} alt={client.name} />
            </div>

            <div className="client-info">
              <h3>{client.name}</h3>
              <p className="client-age">{client.age} years old</p>
            </div>

            <div className="client-goal">
              <FaBullseye className="goal-icon" />
              <span>{client.goal}</span>
            </div>

            <div className="client-progress-bar">
              <div className="progress-label">
                <span>Progress</span>
                <span>{client.progress}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${client.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="client-session">
              <FaCalendarAlt />
              <span>Last session: {client.lastSession}</span>
            </div>

            <button className="btn-secondary">View Details</button>
          </div>
        ))}
      </div>

      {selectedClient && (
        <div className="client-details-modal" onClick={() => setSelectedClient(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedClient(null)}>×</button>

            <div className="modal-header">
              <img src={selectedClient.avatar} alt={selectedClient.name} className="modal-avatar" />
              <div>
                <h2>{selectedClient.name}</h2>
                <p>{selectedClient.age} years old • Goal: {selectedClient.goal}</p>
              </div>
            </div>

            <div className="modal-stats">
              <div className="modal-stat">
                <h4>Progress</h4>
                <p className="stat-value">{selectedClient.progress}%</p>
              </div>
              <div className="modal-stat">
                <h4>Sessions</h4>
                <p className="stat-value">24</p>
              </div>
              <div className="modal-stat">
                <h4>Attendance</h4>
                <p className="stat-value">92%</p>
              </div>
            </div>

            <div className="modal-chart">
              <h3>Progress Over Time</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={clientProgressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="progress" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="modal-actions">
              <button className="btn-primary">Assign Workout Plan</button>
              <button className="btn-secondary">Schedule Session</button>
            </div>
          </div>
        </div>
      )}

      <div className="trainer-summary">
        <h3>Summary</h3>
        <div className="summary-grid">
          <div className="summary-card">
            <FaUser className="summary-icon" />
            <div>
              <h4>Total Clients</h4>
              <p>{trainerClients.length}</p>
            </div>
          </div>
          <div className="summary-card">
            <FaCheckCircle className="summary-icon success" />
            <div>
              <h4>Active This Week</h4>
              <p>{trainerClients.length}</p>
            </div>
          </div>
          <div className="summary-card">
            <FaChartLine className="summary-icon chart" />
            <div>
              <h4>Avg Progress</h4>
              <p>68%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;
