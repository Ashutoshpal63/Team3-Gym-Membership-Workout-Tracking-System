import { useState } from 'react';
import { FaCalendarCheck, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';
import { groupClasses } from '../../data/mockData';

const ClassBooking = () => {
  const [bookedClasses, setBookedClasses] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const bookClass = (classItem) => {
    if (!bookedClasses.includes(classItem.id)) {
      setBookedClasses([...bookedClasses, classItem.id]);
      setSelectedClass(classItem);
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  const isBooked = (classId) => bookedClasses.includes(classId);

  return (
    <div className="class-booking">
      {showConfirmation && (
        <div className="booking-confirmation">
          <FaCheckCircle className="confirm-icon" />
          <p>Successfully booked {selectedClass?.name}!</p>
        </div>
      )}

      <div className="booking-header">
        <h2>Book Group Classes</h2>
        <p>Join our expert-led fitness classes</p>
      </div>

      <div className="classes-grid">
        {groupClasses.map((classItem) => (
          <div key={classItem.id} className="class-card">
            <div className="class-header">
              <h3>{classItem.name}</h3>
              <span className={`availability ${classItem.slots < 5 ? 'low' : 'good'}`}>
                {classItem.slots} spots left
              </span>
            </div>

            <div className="class-details">
              <div className="detail-item">
                <FaClock />
                <span>{classItem.time}</span>
              </div>
              <div className="detail-item">
                <FaUsers />
                <span>{classItem.capacity} max capacity</span>
              </div>
            </div>

            <div className="class-trainer">
              <p>Instructor: <strong>{classItem.trainer}</strong></p>
              <p>Duration: {classItem.duration}</p>
            </div>

            {isBooked(classItem.id) ? (
              <button className="btn-booked" disabled>
                <FaCheckCircle /> Booked
              </button>
            ) : (
              <button
                className="btn-primary"
                onClick={() => bookClass(classItem)}
                disabled={classItem.slots === 0}
              >
                <FaCalendarCheck /> Book Now
              </button>
            )}
          </div>
        ))}
      </div>

      {bookedClasses.length > 0 && (
        <div className="my-bookings">
          <h3>My Upcoming Classes</h3>
          <div className="bookings-list">
            {groupClasses
              .filter(c => bookedClasses.includes(c.id))
              .map((classItem) => (
                <div key={classItem.id} className="booking-item">
                  <div className="booking-info">
                    <h4>{classItem.name}</h4>
                    <p>{classItem.time} - {classItem.duration}</p>
                  </div>
                  <span className="booking-status">Confirmed</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassBooking;
