import { useState } from "react";
import {
  FaCrown,
  FaCheck,
  FaStar,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Feature() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const vipPlans = [
    {
      id: 1,
      name: "Basic",
      price: "Free",
      icon: "💼",
      features: [
        "Create unlimited posts",
        "View all posts",
        "Basic search",
        "Comment on posts",
      ],
      recommended: false,
      badge: "Starter",
      color: "primary",
    },
    {
      id: 2,
      name: "Premium",
      price: "$9.99/month",
      icon: "⭐",
      features: [
        "All Basic features",
        "Advanced search filters",
        "Pin favorite posts",
        "Post scheduling",
        "Analytics dashboard",
        "Priority support",
      ],
      recommended: true,
      badge: "Most Popular",
      color: "success",
    },
    {
      id: 3,
      name: "VIP Pro",
      price: "$19.99/month",
      icon: "👑",
      features: [
        "All Premium features",
        "Custom themes",
        "Video uploads",
        "Profile verification badge",
        "Exclusive community",
        "24/7 VIP support",
        "Advanced analytics",
        "Sponsored posts visibility",
      ],
      recommended: false,
      badge: "Exclusive",
      color: "danger",
    },
  ];

  const benefits = [
    {
      icon: <FaRocket className="text-primary" />,
      title: "Lightning Fast",
      desc: "Experience blazing fast performance",
    },
    {
      icon: <FaLightbulb className="text-warning" />,
      title: "Smart Features",
      desc: "AI-powered recommendations",
    },
    {
      icon: <FaStar className="text-danger" />,
      title: "Premium Support",
      desc: "24/7 dedicated support team",
    },
  ];

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <div className="mb-3">
          <FaCrown className="text-warning" style={{ fontSize: "3rem" }} />
        </div>
        <h1 className="display-4 fw-bold mb-2">
          Unlock Premium <span className="text-primary">Features</span>
        </h1>
        <p className="lead text-muted">
          Join thousands of creators and elevate your social media game
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="row g-4 mb-5">
        {vipPlans.map((plan) => (
          <div key={plan.id} className="col-lg-4 col-md-6">
            <div
              className={`card h-100 border-0 shadow-sm transition ${
                plan.recommended
                  ? "border-2 border-success shadow-lg scale-105"
                  : ""
              }`}
              style={{
                transform: plan.recommended ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={(e) => {
                if (plan.recommended) {
                  e.currentTarget.style.transform = "scale(1.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (plan.recommended) {
                  e.currentTarget.style.transform = "scale(1.05)";
                }
              }}
            >
              {plan.recommended && (
                <div className="position-absolute top-0 start-50 translate-middle-x mt-2">
                  <span className="badge bg-success px-3 py-2">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="card-body text-center pt-5">
                <div className="mb-3" style={{ fontSize: "2.5rem" }}>
                  {plan.icon}
                </div>
                <h3 className="card-title fw-bold mb-2">{plan.name}</h3>
                <div className="mb-3">
                  <span className="display-6 fw-bold">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <p className="text-muted small mb-0">per month</p>
                  )}
                </div>

                <button
                  className={`btn btn-${
                    plan.recommended ? "success" : "outline-secondary"
                  } w-100 mb-4 py-2`}
                  onClick={() => setSelectedPlan(plan.id)}
                  style={{
                    fontWeight: plan.recommended ? "600" : "500",
                  }}
                >
                  {selectedPlan === plan.id ? "✓ Selected" : "Choose Plan"}
                </button>

                <ul className="list-unstyled">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 text-start">
                      <FaCheck className="text-success me-2" />
                      <small>{feature}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="row g-4 mb-5">
        <div className="col-12">
          <h2 className="text-center fw-bold mb-4">Why Choose Premium?</h2>
        </div>
        {benefits.map((benefit, idx) => (
          <div key={idx} className="col-md-4">
            <div className="card border-0 text-center shadow-sm h-100">
              <div className="card-body">
                <div className="mb-3" style={{ fontSize: "2.5rem" }}>
                  {benefit.icon}
                </div>
                <h5 className="card-title fw-bold">{benefit.title}</h5>
                <p className="card-text text-muted">{benefit.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-light rounded-4 p-5 text-center">
        <h3 className="fw-bold mb-3">Ready to go Premium?</h3>
        <p className="text-muted mb-4">
          Get instant access to all exclusive features and premium support
        </p>
        <Link to="/create-post" className="btn btn-primary btn-lg px-4">
          Start Your Free Trial
        </Link>
      </div>

      {/* Selected Plan Info */}
      {selectedPlan && (
        <div className="alert alert-info mt-4 text-center" role="alert">
          <strong>✓ Plan Selected:</strong>{" "}
          {vipPlans.find((p) => p.id === selectedPlan)?.name}
        </div>
      )}
    </div>
  );
}
