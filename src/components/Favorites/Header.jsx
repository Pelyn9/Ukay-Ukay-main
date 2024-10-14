import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/items", label: "Items" },
  { href: "/favorites", label: "Favorites" },
];

function Header() {
  const location = useLocation();

  return (
    <>
      <header className="main-header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/635aa262090bff6c0d7b846a7a5eb7b148ad66e6cae8251fddcea365f5946ff2?placeholderIfAbsent=true&apiKey=e6e279f9e06842139b3f7c01a7502bdc"
          alt="Logo"
          className="logo"
        />
        <nav className="main-nav">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              active={location.pathname === item.href} // Check if the current path matches
            />
          ))}
        </nav>
        <div className="user-actions">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a2788a8b7049cfb9246050e3a43d543c3e9262dc62c968f8648cf04c5d83b2c?placeholderIfAbsent=true&apiKey=e6e279f9e06842139b3f7c01a7502bdc"
            alt="Notification"
            className="notification-icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40f28ff49c3668df52c351d64c61ec9cbf77ffea716d31b91480f0f9d199fb33?placeholderIfAbsent=true&apiKey=e6e279f9e06842139b3f7c01a7502bdc"
            alt="User profile"
            className="profile-icon"
          />
        </div>
      </header>
      <style jsx>{`
        .main-header {
          background-color: #fff;
          display: flex;
          width: 100%;
          align-items: center;
          gap: 20px;
          font-size: 24px;
          padding: 22px 52px 0;
        }
        @media (max-width: 991px) {
          .main-header {
            max-width: 100%;
            padding: 20px;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        }
        .logo {
          aspect-ratio: 1.02;
          object-fit: contain;
          width: 172px;
          border-radius: 84px;
        }
        .main-nav {
          display: flex;
          align-items: center;
          gap: 72px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .main-nav {
            max-width: 100%;
            flex-wrap: wrap;
            gap: 40px;
          }
        }
        .user-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .notification-icon {
          aspect-ratio: 1.07;
          object-fit: contain;
          width: 48px;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
        .profile-icon {
          aspect-ratio: 0.95;
          object-fit: contain;
          width: 42px;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
}

export default Header;
