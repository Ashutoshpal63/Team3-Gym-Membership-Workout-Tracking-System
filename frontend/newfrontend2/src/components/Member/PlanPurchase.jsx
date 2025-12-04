import { useState } from 'react';
import { FaCrown, FaCheck, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import { membershipPlans } from '../../data/mockData';

const PlanPurchase = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const handlePurchase = () => {
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
      setShowPayment(false);
      setSelectedPlan(null);
    }, 4000);
  };

  if (purchased) {
    return (
      <div className="purchase-success">
        <FaCheckCircle className="success-icon-large" />
        <h2>Purchase Successful!</h2>
        <p>Your {selectedPlan.name} membership has been activated</p>
        <div className="success-details">
          <p>Amount Paid: ${selectedPlan.price}</p>
          <p>Duration: {selectedPlan.duration}</p>
          <p>A confirmation email has been sent to your inbox</p>
        </div>
      </div>
    );
  }

  if (showPayment) {
    return (
      <div className="payment-section">
        <div className="payment-header">
          <h2>Complete Your Purchase</h2>
          <p>Selected Plan: {selectedPlan.name}</p>
        </div>

        <div className="payment-summary">
          <div className="summary-row">
            <span>Plan</span>
            <span>{selectedPlan.name}</span>
          </div>
          <div className="summary-row">
            <span>Duration</span>
            <span>{selectedPlan.duration}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${selectedPlan.price}</span>
          </div>
        </div>

        <div className="payment-form">
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" className="form-input" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" className="form-input" />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" placeholder="123" className="form-input" />
            </div>
          </div>
          <div className="form-group">
            <label>Cardholder Name</label>
            <input type="text" placeholder="John Doe" className="form-input" />
          </div>

          <div className="payment-actions">
            <button onClick={() => setShowPayment(false)} className="btn-secondary">
              Cancel
            </button>
            <button onClick={handlePurchase} className="btn-primary">
              <FaCreditCard /> Pay ${selectedPlan.price}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="plan-purchase">
      <div className="purchase-header">
        <h2>Choose Your Membership Plan</h2>
        <p>Select the perfect plan for your fitness journey</p>
      </div>

      <div className="plans-grid">
        {membershipPlans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${plan.popular ? 'popular' : ''}`}
          >
            {plan.popular && (
              <div className="popular-badge">
                <FaCrown /> Most Popular
              </div>
            )}

            <div className="plan-header">
              <h3>{plan.name}</h3>
              <div className="plan-price">
                <span className="price">${plan.price}</span>
                <span className="duration">/{plan.duration}</span>
              </div>
            </div>

            <div className="plan-features">
              {plan.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <FaCheck className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`btn-plan ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => handleSelectPlan(plan)}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>

      <div className="purchase-info">
        <h3>Why Choose FitTrack Pro?</h3>
        <div className="info-grid">
          <div className="info-item">
            <h4>No Commitment</h4>
            <p>Cancel anytime, no questions asked</p>
          </div>
          <div className="info-item">
            <h4>Expert Trainers</h4>
            <p>Certified professionals to guide you</p>
          </div>
          <div className="info-item">
            <h4>Modern Equipment</h4>
            <p>State-of-the-art fitness machines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPurchase;
