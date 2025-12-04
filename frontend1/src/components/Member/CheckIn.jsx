import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { FaCheckCircle, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const CheckIn = () => {
  const { user } = useAuth();
  const [checkedIn, setCheckedIn] = useState(false);
  const qrValue = `GYM-CHECKIN-${user.id}-${Date.now()}`;

  const handleCheckIn = () => {
    setCheckedIn(true);
    setTimeout(() => setCheckedIn(false), 5000);
  };

  return (
    <div className="checkin-container">
      {!checkedIn ? (
        <>
          <div className="checkin-header">
            <h2>Scan to Check-In</h2>
            <p>Show this QR code at the gym entrance</p>
          </div>

          <div className="qr-code-wrapper">
            <QRCodeSVG value={qrValue} size={250} level="H" />
          </div>

          <div className="checkin-info">
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>Downtown Fitness Center</span>
            </div>
            <div className="info-item">
              <FaClock />
              <span>Open: 5:00 AM - 11:00 PM</span>
            </div>
          </div>

          <button className="btn-primary btn-large" onClick={handleCheckIn}>
            Simulate Check-In
          </button>

          <div className="checkin-note">
            <p>Note: QR code refreshes every 30 seconds for security</p>
          </div>
        </>
      ) : (
        <div className="checkin-success">
          <FaCheckCircle className="success-icon" />
          <h2>Check-In Successful!</h2>
          <p>Welcome to the gym, {user.name}</p>
          <p className="checkin-time">
            Time: {new Date().toLocaleTimeString()}
          </p>
          <div className="success-details">
            <p>Have a great workout!</p>
            <p>Remember to stay hydrated</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckIn;
