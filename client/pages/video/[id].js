import React from "react";
import ReactPlayer from "react-player";
import Link from "next/link";
import css from "../../sass/pages/video.module.scss";
import eye from "../../assets/images/eye.png";
import user from "../../assets/images/user.png";
import Button from "../../components/shared/Button";

const Video = (props) => {
  const {
    container,
    left,
    right,
    ad,
    videoHeading,
    channelContainer,
    channelLeft,
    channelRight,
    published,
  } = css;
  return (
    <div className={container}>
      <div className={left}>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />

        <div className={videoHeading}>
          <h4>Video Title</h4>
          <small>
            <img
              src={eye}
              style={{
                width: "14px",
                height: "14px",
                marginRight: "4px",
                marginTop: "4px",
              }}
            />
            4M views
          </small>
        </div>

        <div className={channelContainer}>
          <div className={channelLeft}>
            <img src={user} />
            <div>
              <span>
                <Link href="/login">
                  <a className="text-link">Channel Name</a>
                </Link>
              </span>
              <p className={published}>published on May 31,2020</p>
            </div>
          </div>
          <div className={channelRight}>
            <div style={{ width: 140 }}>
              <Button>Subscribe 2M</Button>
            </div>
          </div>
        </div>
      </div>

      <div className={right}>
        <div className={ad}>AD SPACE</div>
      </div>
    </div>
  );
};

export default Video;
