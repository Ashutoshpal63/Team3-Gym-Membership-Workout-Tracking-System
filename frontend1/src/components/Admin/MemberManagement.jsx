import { useState } from 'react';
import { FaSearch, FaCheckCircle, FaExclamationCircle, FaBell, FaEdit } from 'react-icons/fa';
import { allMembers } from '../../data/mockData';

const MemberManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [notification, setNotification] = useState(null);

  const filteredMembers = allMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || member.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const sendReminder = (member) => {
    setNotification(`Reminder sent to ${member.name}`);
    setTimeout(() => setNotification(null), 3000);
  };

  const getStatusBadge = (status) => {
    if (status === 'Active') {
      return <span className="status-badge active"><FaCheckCircle /> Active</span>;
    }
    return <span className="status-badge expiring"><FaExclamationCircle /> Expiring Soon</span>;
  };

  return (
    <div className="member-management">
      {notification && (
        <div className="notification-toast">
          <FaBell /> {notification}
        </div>
      )}

      <div className="management-header">
        <h2>Member Management</h2>
        <p>Manage memberships and send notifications</p>
      </div>

      <div className="management-controls">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-buttons">
          <button
            className={filterStatus === 'all' ? 'filter-active' : ''}
            onClick={() => setFilterStatus('all')}
          >
            All
          </button>
          <button
            className={filterStatus === 'Active' ? 'filter-active' : ''}
            onClick={() => setFilterStatus('Active')}
          >
            Active
          </button>
          <button
            className={filterStatus === 'Expiring Soon' ? 'filter-active' : ''}
            onClick={() => setFilterStatus('Expiring Soon')}
          >
            Expiring Soon
          </button>
        </div>
      </div>

      <div className="members-table">
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Expiry Date</th>
              <th>Last Check-in</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id}>
                <td>
                  <div className="member-cell">
                    <div className="member-avatar">{member.name[0]}</div>
                    <span>{member.name}</span>
                  </div>
                </td>
                <td>{member.plan}</td>
                <td>{getStatusBadge(member.status)}</td>
                <td>{member.expiry}</td>
                <td>{member.lastCheckIn}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon" title="Edit">
                      <FaEdit />
                    </button>
                    <button
                      className="btn-icon"
                      title="Send Reminder"
                      onClick={() => sendReminder(member)}
                    >
                      <FaBell />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="management-summary">
        <div className="summary-item">
          <h4>Total Members</h4>
          <p>{allMembers.length}</p>
        </div>
        <div className="summary-item">
          <h4>Active</h4>
          <p>{allMembers.filter(m => m.status === 'Active').length}</p>
        </div>
        <div className="summary-item">
          <h4>Expiring Soon</h4>
          <p>{allMembers.filter(m => m.status === 'Expiring Soon').length}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberManagement;
