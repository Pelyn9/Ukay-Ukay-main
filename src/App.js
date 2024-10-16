import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage'; // Ensure this points to your login component
import SignUpPage from './components/SignUpPage/SignUpPage';
import ResetPasswordForm from './components/ResetPassword/ResetPasswordForm';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import Home from './components/HomeComponents/Home';
import Items from './components/ItemsComponents/Items';
import Cart from './components/CartComponents/Cart';
import Profile from './components/ProfileComponents/Profile';
import Favorites from './components/FavoritesComponents/Favorites'; // Imported but not used in routes
import './App.css';

function App() {
  const [loading, setLoading] = useState(false); // Set initial loading state to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timing if necessary

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingComponent isFadingOut={false} />
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Added /login route */}
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ResetPasswordForm />} />
          <Route path="/loading" element={<LoadingComponent isFadingOut={true} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
