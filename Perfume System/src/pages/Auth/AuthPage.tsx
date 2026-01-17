import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../css/auth.css";
import loginBg from "../../assets/login.jpg";

const AuthPage = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/", { replace: true }); 
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setMode("login"); 
  };

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="auth-wrapper">
        <AnimatePresence mode="wait">
          {mode === "login" ? (
            <motion.div
              key="login"
              className="auth-card"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h1>Welcome Back</h1>
              <p>Sign in to continue to DELTIK</p>

              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                />

                <div className="auth-options">
                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="link"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Sign In
                </button>
              </form>

              <div className="auth-switch">
                Don’t have an account?
                <button
                  type="button"
                  onClick={() => setMode("register")}
                >
                  Create one
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="register"
              className="auth-card"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h1>Create Account</h1>
              <p>Begin your DELTIK journey</p>

              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Create Account
                </button>
              </form>

              <div className="auth-switch">
                Already have an account?
                <button
                  type="button"
                  onClick={() => setMode("login")}
                >
                  Sign in
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;
