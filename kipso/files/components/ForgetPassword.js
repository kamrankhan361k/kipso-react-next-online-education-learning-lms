import React from "react";

const ForgetPassword = () => {
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
            <input type="email" placeholder="Enter Email Address *" />
            <p className="text-center">
              Please enter your email address to get password reset link.
            </p>
            <button type="submit" className="thm-btn">
              Reset Password
            </button>
          </form>
          <p className="signup-link">
            New To Kipso? <a href="/register">Signup</a>
          </p>
          <p className="copyright-text">
            © copyright {new Date().getFullYear()} by Layerdrops.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
