import React from "react";
import { Link } from "react-router-dom";

function NavItem({ label, href, active }) {
  return (
    <Link to={href} className={`nav-item ${active ? 'active' : ''}`}>
      <span>{label}</span>
      {active && <div className="active-indicator" />}
      <style jsx>{`
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          text-decoration: none; /* Prevent underline on links */
          color: inherit; /* Inherit color from parent */
        }
        .nav-item span {
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
        .active-indicator {
          background-color: #000;
          width: 99px;
          height: 2px;
          margin-top: 9px;
        }
        @media (max-width: 991px) {
          .active-indicator {
            margin-right: 6px;
          }
        }
      `}</style>
    </Link>
  );
}

export default NavItem;
