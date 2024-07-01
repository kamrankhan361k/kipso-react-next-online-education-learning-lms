import React from "react";

const RegisterForm = () => {
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
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="password" placeholder="Your Password *" />
            <input type="password" placeholder="Confirm Password *" />

            <button type="submit" className="thm-btn">
              Sign Up
            </button>
          </form>
          <p className="signup-link">
            Already Have an Account? <a href="/login">Login Here</a>
          </p>
          <p className="copyright-text">
            © copyright {new Date().getFullYear()} by Layerdrops.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
