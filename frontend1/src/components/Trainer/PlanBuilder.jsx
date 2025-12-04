import { useState } from 'react';
import { FaPlus, FaTrash, FaSave, FaDumbbell, FaUtensils } from 'react-icons/fa';
import { trainerClients } from '../../data/mockData';

const PlanBuilder = () => {
  const [planType, setPlanType] = useState('workout');
  const [selectedClient, setSelectedClient] = useState('');
  const [planName, setPlanName] = useState('');
  const [items, setItems] = useState([]);
  const [saved, setSaved] = useState(false);

  const [newItem, setNewItem] = useState({
    name: '',
    details: '',
    notes: ''
  });

  const addItem = () => {
    if (newItem.name && newItem.details) {
      setItems([...items, { ...newItem, id: Date.now() }]);
      setNewItem({ name: '', details: '', notes: '' });
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const savePlan = () => {
    if (selectedClient && planName && items.length > 0) {
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setSelectedClient('');
        setPlanName('');
        setItems([]);
      }, 3000);
    }
  };

  if (saved) {
    return (
      <div className="plan-saved">
        <FaSave className="success-icon-large" />
        <h2>Plan Saved Successfully!</h2>
        <p>{planType === 'workout' ? 'Workout' : 'Diet'} plan assigned to client</p>
        <div className="saved-details">
          <h3>{planName}</h3>
          <p>{items.length} items included</p>
        </div>
      </div>
    );
  }

  return (
    <div className="plan-builder">
      <div className="builder-header">
        <h2>Create Custom Plan</h2>
        <p>Build personalized workout or diet plans for your clients</p>
      </div>

      <div className="plan-type-selector">
        <button
          className={planType === 'workout' ? 'type-active' : ''}
          onClick={() => setPlanType('workout')}
        >
          <FaDumbbell /> Workout Plan
        </button>
        <button
          className={planType === 'diet' ? 'type-active' : ''}
          onClick={() => setPlanType('diet')}
        >
          <FaUtensils /> Diet Plan
        </button>
      </div>

      <div className="plan-form">
        <div className="form-group">
          <label>Select Client</label>
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="form-select"
          >
            <option value="">Choose a client...</option>
            {trainerClients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name} - {client.goal}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Plan Name</label>
          <input
            type="text"
            placeholder={planType === 'workout' ? 'e.g., Advanced Strength Training' : 'e.g., High Protein Diet'}
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="items-section">
          <h3>
            {planType === 'workout' ? 'Add Exercises' : 'Add Meals'}
          </h3>

          <div className="item-inputs">
            <input
              type="text"
              placeholder={planType === 'workout' ? 'Exercise name' : 'Meal name'}
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="form-input"
            />
            <input
              type="text"
              placeholder={planType === 'workout' ? 'Sets x Reps x Weight' : 'Portion size & calories'}
              value={newItem.details}
              onChange={(e) => setNewItem({ ...newItem, details: e.target.value })}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Additional notes"
              value={newItem.notes}
              onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
              className="form-input"
            />
            <button onClick={addItem} className="btn-secondary">
              <FaPlus /> Add
            </button>
          </div>
        </div>

        {items.length > 0 && (
          <div className="items-list">
            <h3>Plan Items ({items.length})</h3>
            <div className="plan-items">
              {items.map((item) => (
                <div key={item.id} className="plan-item">
                  <div className="item-content">
                    <h4>{item.name}</h4>
                    <p className="item-details">{item.details}</p>
                    {item.notes && <p className="item-notes">{item.notes}</p>}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="btn-danger-small"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <button onClick={savePlan} className="btn-primary btn-large">
              <FaSave /> Save & Assign Plan
            </button>
          </div>
        )}
      </div>

      <div className="plan-templates">
        <h3>Quick Templates</h3>
        <div className="templates-grid">
          <div className="template-card">
            <h4>Beginner Full Body</h4>
            <p>3 days/week compound movements</p>
          </div>
          <div className="template-card">
            <h4>Advanced Split</h4>
            <p>5 days/week muscle group focus</p>
          </div>
          <div className="template-card">
            <h4>Weight Loss Diet</h4>
            <p>Calorie deficit balanced meals</p>
          </div>
          <div className="template-card">
            <h4>Muscle Gain Diet</h4>
            <p>High protein surplus nutrition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanBuilder;
