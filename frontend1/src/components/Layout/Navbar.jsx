import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaDumbbell, FaSignOutAlt, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <FaDumbbell className="logo-icon" />
          <span>FitTrack Pro</span>
        </Link>
        {user && (
          <div className="nav-user">
            <div className="user-info">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <div className="user-details">
                <span className="user-name">{user.name}</span>
                <span className="user-role">{user.role}</span>
              </div>
            </div>
            <button onClick={logout} className="btn-logout">
              <FaSignOutAlt />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
