import React from "react";
import css from "../../sass/pages/login.module.scss";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import Link from "next/link";
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
          <div className="logo">MY</div>
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
          <div style={{ marginBottom: 16, width: "100%" }}>
            <Input
              label="Email Address"
              name="email"
              placeholder="Enter email address"
              type="email-address"
            />
          </div>
          <div style={{ marginBottom: 16, width: "100%" }}>
            <Input
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <Link href="/">
            <Button type="submit">Sign In</Button>
          </Link>
        </form>

        <small className={css["description"]}>
          Dont have an account?{" "}
          <span>
            <Link href="/register">
              <a className="text-link">Sign Up</a>
            </Link>
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

Login.Layout = React.Fragment;

export default Login;
