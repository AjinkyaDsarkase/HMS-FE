import React from "react";

export default function LoginPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Side - Branding */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#007BFF",
          color: "white",
          padding: "40px",
          backgroundImage: "url('/stethoscope.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2>MEDIGRAPH</h2>
          <p>
            Empowering Healthcare, One Click at a Time:
            <br />
            Your Health, Your Records, Your Control.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        ></div>
      </div>

      {/* Right Side - Form */}
      <div style={{ flex: 1, padding: "40px" }}>
        <h2>Login</h2>
        <p>Log in to your account.</p>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label>Email:</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              style={{ width: "100%", padding: "8px" }}
            />
            <div style={{ textAlign: "right" }}>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div>
            <button type="submit" style={{ padding: "10px 20px" }}>
              Log In
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button type="button" style={{ padding: "10px 20px" }}>
              Log in with Google
            </button>
          </div>
        </form>
        <p style={{ marginTop: "20px" }}>
          Don’t have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
