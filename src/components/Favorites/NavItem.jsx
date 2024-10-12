import React from "react";

function NavItem({ label, active }) {
  return (
    <>
      <div className={`nav-item ${active ? 'active' : ''}`}>
        <span>{label}</span>
        {active && <div className="active-indicator" />}
      </div>
      <style jsx>{`
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
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
    </>
  );
}

export default NavItem;