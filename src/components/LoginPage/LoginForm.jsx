import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import SocialIcons from './SocialIcons';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  const handleLoginClick = () => {
    navigate('/home'); // Navigate to the Home page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginContainer = document.querySelector(`.${styles.loginContainer}`);
    loginContainer.classList.add(styles.fadeOut);

    setTimeout(() => {
      setIsLoading(true);
      navigate('/loading'); // This can be removed if not needed
    }, 1500);

    setTimeout(() => {
      handleLoginClick(); // Call the new handleLoginClick function
    }, 3000);
  };

  const handleTogglePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <form className={styles.loginContainer} onSubmit={handleSubmit}>
      <h1 className={styles.loginTitle}>Log In</h1>
      <input
        id="emailUsername"
        className={styles.inputField}
        type="text"
        placeholder="Email/Username"
        aria-label="Email or Username"
        required
      />
      <div className={styles.passwordFieldContainer}>
        <input
          id="password"
          className={styles.inputField}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          aria-label="Password"
          required
        />
        <button
          type="button"
          className={styles.togglePasswordVisibility}
          onClick={handleTogglePassword}
          aria-label={showPassword ? "Hide Password" : "Show Password"}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button type="submit" className={styles.loginButton}>Log In</button>
      <button
        type="button"
        className={styles.forgotPassword}
        onClick={handleForgotPasswordClick}
        aria-label="Forgot Password"
      >
        Forget Password
      </button>
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerText}>OR</span>
        <div className={styles.dividerLine} />
      </div>
      <SocialIcons />
      <div className={styles.signUpPrompt}>
        <span className={styles.newUserText}>New to Ukay-Ukay?</span>
        <button
          type="button"
          className={styles.signUpLink}
          onClick={handleSignUpClick}
          aria-label="Sign Up"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
