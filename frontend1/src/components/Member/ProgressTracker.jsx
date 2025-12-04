import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { workoutHistory } from '../../data/mockData';
import { FaChartLine, FaWeight, FaTrophy } from 'react-icons/fa';

const ProgressTracker = () => {
  const latestData = workoutHistory[workoutHistory.length - 1];
  const firstData = workoutHistory[0];

  const calculateProgress = (current, initial) => {
    return ((current - initial) / initial * 100).toFixed(1);
  };

  return (
    <div className="progress-tracker">
      <div className="tracker-header">
        <h2>Your Progress Journey</h2>
        <p>Track your improvements over time</p>
      </div>

      <div className="progress-stats">
        <div className="progress-stat-card">
          <FaWeight className="progress-icon weight" />
          <div className="progress-info">
            <h3>Weight Progress</h3>
            <p className="progress-value">{firstData.weight} → {latestData.weight} lbs</p>
            <p className="progress-change negative">
              {calculateProgress(latestData.weight, firstData.weight)}% change
            </p>
          </div>
        </div>

        <div className="progress-stat-card">
          <FaTrophy className="progress-icon trophy" />
          <div className="progress-info">
            <h3>Bench Press</h3>
            <p className="progress-value">{firstData.benchPress} → {latestData.benchPress} lbs</p>
            <p className="progress-change positive">
              +{calculateProgress(latestData.benchPress, firstData.benchPress)}% improvement
            </p>
          </div>
        </div>

        <div className="progress-stat-card">
          <FaTrophy className="progress-icon trophy" />
          <div className="progress-info">
            <h3>Deadlift</h3>
            <p className="progress-value">{firstData.deadlift} → {latestData.deadlift} lbs</p>
            <p className="progress-change positive">
              +{calculateProgress(latestData.deadlift, firstData.deadlift)}% improvement
            </p>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h3>Body Weight Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={workoutHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#10b981" strokeWidth={2} name="Weight (lbs)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Strength Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={workoutHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="benchPress" stroke="#3b82f6" strokeWidth={2} name="Bench Press" />
              <Line type="monotone" dataKey="squat" stroke="#f59e0b" strokeWidth={2} name="Squat" />
              <Line type="monotone" dataKey="deadlift" stroke="#ef4444" strokeWidth={2} name="Deadlift" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Lift Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={workoutHistory.slice(-4)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="benchPress" fill="#3b82f6" name="Bench Press" />
              <Bar dataKey="squat" fill="#f59e0b" name="Squat" />
              <Bar dataKey="deadlift" fill="#ef4444" name="Deadlift" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="progress-insights">
        <h3>Insights & Achievements</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <h4>Consistency Streak</h4>
            <p>You've logged workouts for 6 consecutive weeks!</p>
          </div>
          <div className="insight-card">
            <h4>Strength Gains</h4>
            <p>Your total combined lift increased by 85 lbs</p>
          </div>
          <div className="insight-card">
            <h4>Weight Management</h4>
            <p>Lost 6 lbs while building strength - excellent progress!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
