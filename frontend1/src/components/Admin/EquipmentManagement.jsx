import { useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaTools, FaCalendarAlt } from 'react-icons/fa';
import { equipment } from '../../data/mockData';

const EquipmentManagement = () => {
  const [equipmentList, setEquipmentList] = useState(equipment);
  const [showForm, setShowForm] = useState(false);

  const updateStatus = (id, newStatus) => {
    setEquipmentList(equipmentList.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    ));
  };

  const getStatusBadge = (status) => {
    if (status === 'Active') {
      return (
        <span className="equipment-status active">
          <FaCheckCircle /> Active
        </span>
      );
    }
    return (
      <span className="equipment-status maintenance">
        <FaExclamationTriangle /> Maintenance
      </span>
    );
  };

  return (
    <div className="equipment-management">
      <div className="equipment-header">
        <h2>Equipment Management</h2>
        <p>Track and maintain gym equipment</p>
      </div>

      <div className="equipment-stats">
        <div className="equipment-stat">
          <h4>Total Equipment</h4>
          <p className="stat-number">{equipmentList.length}</p>
        </div>
        <div className="equipment-stat">
          <h4>Active</h4>
          <p className="stat-number active">{equipmentList.filter(e => e.status === 'Active').length}</p>
        </div>
        <div className="equipment-stat">
          <h4>Under Maintenance</h4>
          <p className="stat-number warning">{equipmentList.filter(e => e.status === 'Maintenance').length}</p>
        </div>
      </div>

      <div className="equipment-list">
        {equipmentList.map((item) => (
          <div key={item.id} className="equipment-card">
            <div className="equipment-info">
              <div className="equipment-icon-wrapper">
                <FaTools className="equipment-icon" />
              </div>
              <div className="equipment-details">
                <h3>{item.name}</h3>
                {getStatusBadge(item.status)}
              </div>
            </div>

            <div className="equipment-dates">
              <div className="date-item">
                <FaCalendarAlt />
                <div>
                  <p className="date-label">Last Maintenance</p>
                  <p className="date-value">{item.lastMaintenance}</p>
                </div>
              </div>
              <div className="date-item">
                <FaCalendarAlt />
                <div>
                  <p className="date-label">Next Maintenance</p>
                  <p className="date-value">{item.nextMaintenance}</p>
                </div>
              </div>
            </div>

            <div className="equipment-actions">
              {item.status === 'Active' ? (
                <button
                  className="btn-warning"
                  onClick={() => updateStatus(item.id, 'Maintenance')}
                >
                  Mark for Maintenance
                </button>
              ) : (
                <button
                  className="btn-success"
                  onClick={() => updateStatus(item.id, 'Active')}
                >
                  Mark as Active
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="maintenance-schedule">
        <h3>Upcoming Maintenance Schedule</h3>
        <div className="schedule-list">
          {equipmentList
            .filter(item => new Date(item.nextMaintenance) <= new Date('2025-01-15'))
            .map((item) => (
              <div key={item.id} className="schedule-item">
                <span className="schedule-name">{item.name}</span>
                <span className="schedule-date">{item.nextMaintenance}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentManagement;
