import React from "react";
import css from "../../sass/pages/login.module.scss";
import Slider from "react-slick";

const Login = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`${css["body-container"]}`}>
      <div className={css["left-container"]}>
        <div>
          <div className={css["logo"]}>MY</div>
          <h4 className={css["heading"]}>Welcome to Mini YT</h4>
          <small className={css["description"]}>
            Find videos related to <span>coding and programming</span>
            <span>all under one hood.</span>
          </small>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={css["login-form"]}
        >
          <div className={css["form-item"]}>
            <label className={css["label"]} htmlFor="email">
              Email Address
            </label>
            <input
              className={css["input"]}
              name="email"
              placeholder="Enter email address"
              type="email-address"
            />
          </div>

          <div className={css["form-item"]}>
            <label className={css["label"]} htmlFor="password">
              Password
            </label>
            <input
              className={css["input"]}
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>

          <button type="submit" className={css["submit"]}>
            Sign In
          </button>
        </form>

        <small className={css["description"]}>
          Dont have an account?{" "}
          <span>
            <a className="text-link">Sign Up</a>
          </span>
        </small>
      </div>
      <div className={css["right-container"]}>
        <div className={css["carousel-container"]}>
          <div>
            <img
              src="https://askbootstrap.com/preview/vidoe-v2-1/theme-five/img/login.png"
              style={{
                margin: "auto",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
