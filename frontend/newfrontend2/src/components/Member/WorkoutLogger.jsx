import { useState } from 'react';
import { FaPlus, FaTrash, FaSave, FaDumbbell } from 'react-icons/fa';
import { recentWorkouts } from '../../data/mockData';

const WorkoutLogger = () => {
  const [workoutType, setWorkoutType] = useState('');
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: ''
  });
  const [saved, setSaved] = useState(false);

  const addExercise = () => {
    if (newExercise.name && newExercise.sets && newExercise.reps) {
      setExercises([...exercises, { ...newExercise, id: Date.now() }]);
      setNewExercise({ name: '', sets: '', reps: '', weight: '' });
    }
  };

  const removeExercise = (id) => {
    setExercises(exercises.filter(ex => ex.id !== id));
  };

  const saveWorkout = () => {
    if (workoutType && exercises.length > 0) {
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setWorkoutType('');
        setExercises([]);
      }, 3000);
    }
  };

  return (
    <div className="workout-logger">
      {!saved ? (
        <>
          <div className="logger-header">
            <h2>Log Your Workout</h2>
            <p>Track your exercises, sets, reps, and weight</p>
          </div>

          <div className="workout-form">
            <div className="form-group">
              <label>Workout Type</label>
              <input
                type="text"
                placeholder="e.g., Chest & Triceps, Leg Day"
                value={workoutType}
                onChange={(e) => setWorkoutType(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="exercise-input-section">
              <h3>Add Exercise</h3>
              <div className="exercise-inputs">
                <input
                  type="text"
                  placeholder="Exercise name"
                  value={newExercise.name}
                  onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
                  className="form-input"
                />
                <input
                  type="number"
                  placeholder="Sets"
                  value={newExercise.sets}
                  onChange={(e) => setNewExercise({ ...newExercise, sets: e.target.value })}
                  className="form-input small"
                />
                <input
                  type="number"
                  placeholder="Reps"
                  value={newExercise.reps}
                  onChange={(e) => setNewExercise({ ...newExercise, reps: e.target.value })}
                  className="form-input small"
                />
                <input
                  type="number"
                  placeholder="Weight (lbs)"
                  value={newExercise.weight}
                  onChange={(e) => setNewExercise({ ...newExercise, weight: e.target.value })}
                  className="form-input small"
                />
                <button onClick={addExercise} className="btn-secondary">
                  <FaPlus /> Add
                </button>
              </div>
            </div>

            {exercises.length > 0 && (
              <div className="exercises-list">
                <h3>Today's Exercises</h3>
                <div className="exercises-table">
                  {exercises.map((exercise) => (
                    <div key={exercise.id} className="exercise-row">
                      <span className="exercise-name">{exercise.name}</span>
                      <span className="exercise-detail">{exercise.sets} sets</span>
                      <span className="exercise-detail">{exercise.reps} reps</span>
                      <span className="exercise-detail">{exercise.weight || 0} lbs</span>
                      <button
                        onClick={() => removeExercise(exercise.id)}
                        className="btn-danger-small"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
                <button onClick={saveWorkout} className="btn-primary btn-large">
                  <FaSave /> Save Workout
                </button>
              </div>
            )}
          </div>

          <div className="recent-workouts">
            <h3>Recent Workouts</h3>
            <div className="workouts-grid">
              {recentWorkouts.map((workout) => (
                <div key={workout.id} className="workout-card">
                  <div className="workout-header">
                    <FaDumbbell className="workout-icon" />
                    <div>
                      <h4>{workout.type}</h4>
                      <p className="workout-date">{workout.date}</p>
                    </div>
                  </div>
                  <p className="workout-duration">{workout.duration}</p>
                  <div className="workout-exercises">
                    {workout.exercises.map((ex, idx) => (
                      <div key={idx} className="workout-exercise-item">
                        <span>{ex.name}</span>
                        <span className="exercise-stats">
                          {ex.sets}x{ex.reps} @ {ex.weight}lbs
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="save-success">
          <FaSave className="success-icon" />
          <h2>Workout Saved!</h2>
          <p>Great job completing your workout</p>
          <div className="workout-summary">
            <h3>{workoutType}</h3>
            <p>{exercises.length} exercises logged</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutLogger;
