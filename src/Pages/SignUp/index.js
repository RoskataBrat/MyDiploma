import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../api";
import original_Logo from "../../assets/images/logo.png";
import GoogleImg from "../../assets/images/google-logo.webp";
import "../../styles/App.css";

function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    const minLength = 6;
    const hasNumber = /\d/; // Regex for at least one number
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // Regex for at least one special character
    if (password.length < minLength) {
      return "Password must be at least 6 characters long.";
    }
    if (!hasNumber.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!hasSpecialChar.test(password)) {
      return "Password must contain at least one special character (e.g., !, @, $).";
    }
    return ""; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for password validation
    const passwordValidationMessage = validatePassword(formData.password);
    if (passwordValidationMessage) {
      setPasswordError(passwordValidationMessage);
      return;
    } else {
      setPasswordError("");
    }

    try {
      await signup(formData);
      setSuccessMessage("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/signin");
      }, 3000); // Redirect after 3 seconds
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <section className="section signUpPage">
      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="text-center signUpLogo">
            <img className="logoWrapper" src={original_Logo} alt="Logo" />
          </div>
          <form className="mt-3" onSubmit={handleSubmit}>
            <h2 className="mb-4">Регистрация</h2>

            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}

            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-100 form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-100 form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-100 form-control"
                required
              />
              {/* Password validation instructions */}
              <small className="form-text text-muted">
                Паролата трябва да бъде най-малко 6 символа, като съдържа поне една цифра, 
                както и да включва поне един от следните символи (e.g., !, @, $).
              </small>
              {passwordError && (
                <div className="text-danger mt-2">{passwordError}</div>
              )}
            </div>

            <div className="d-flex align-items-center mt-3 mb-3">
              <button
                type="submit"
                className="btn btn-blue w-100 btn-lg btn-big"
              >
                Регистрирай се
              </button>
            </div>

            <p className="txt">
              Имаш регистрация?{" "}
              <Link to="/signin" className="border-effect">
                Влез
              </Link>
            </p>

            {/*<h6 className="mt-3 text-center font-weight-bold">
              Or continue with social account
            </h6>
            <button className="loginWithGoogle mt-3" type="button">
              <img src={GoogleImg} alt="Google Logo" /> Sign Up with Google
            </button>*/}
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
