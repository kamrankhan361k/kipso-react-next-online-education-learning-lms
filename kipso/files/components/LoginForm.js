import React from "react";

const LoginForm = () => {
  return (
    <section className="login-wrapper">
      <div
        className="login-bg"
        style={{ backgroundImage: `url(/assets/images/login-bg.jpg)` }}
      ></div>

      <div className="login-content">
        <div className="login-content__inner">
          <div className="logo-box">
            <div className="logo text-center">
              <a href="/" title="Kipso - LMS NextJs Template">
                <img
                  src="/assets/images/logo-dark.png"
                  width="128"
                  className="main-logo"
                  alt="Kipso - LMS NextJs Template"
                  title="Kipso - LMS NextJs Template"
                />
              </a>
            </div>
          </div>
          <form action="#">
            <input type="text" placeholder="Enter Email Address *" />
            <input type="password" placeholder="Your Password *" />
            <p className="text-right">
              <a href="/forget-password">Forgot your password?</a>
            </p>
            <button type="submit" className="thm-btn">
              Sign in
            </button>
          </form>
          <p className="signup-link">
            New to Kipso? <a href="/register">Signup</a>
          </p>
          <p className="copyright-text">
            © copyright {new Date().getFullYear()} by Layerdrops.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
