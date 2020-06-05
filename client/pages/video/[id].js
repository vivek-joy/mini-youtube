import React from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import css from '../../sass/pages/video.module.scss';
import eye from '../../assets/images/eye.png';
import user from '../../assets/images/user.png';
import Button from '../../components/shared/Button';
import play from '../../assets/images/play.png';

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
    small,
    videoListContainer,
    videoListImage,
    videoListBody,
    videoListDesc,
  } = css;
  return (
    <div className={container}>
      <div className={left}>
        <ReactPlayer
          width={700}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />

        <div className={videoHeading}>
          <h4>Video Title</h4>
          <small>
            <img
              src={eye}
              style={{
                width: '14px',
                height: '14px',
                marginRight: '4px',
                marginTop: '4px',
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

        <div className={channelContainer}>
          <div>
            <h5>About:</h5>
            <div className={small} style={{ marginTop: 8 }}>
              djkznfbdjkzfnjdnf dnfjsdnlfnlsdjfklsdmfklmdklzfmklsdf
              sdkfmsdklmfklsdmklfm
            </div>
          </div>
        </div>
      </div>

      <div className={right}>
        <div className={ad}>AD SPACE</div>
        <div className={videoListContainer}>
          <h4>Up Next</h4>

          {[1, 2, 3, 4, 5, 6].map((d) => (
            <div key={d} className={videoListBody}>
              <div className={videoListImage}>
                <img
                  src="https://images.unsplash.com/photo-1591296795953-9114115d197b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="videolist avatar"
                />
                <div
                  className={css['featured-img-hover']}
                  style={{ position: 'absolute', zIndex: 1 }}
                >
                  <img
                    src={play}
                    style={{ width: '30px', height: '30px' }}
                    alt="link to play video"
                  />
                </div>
              </div>

              <div className={videoListDesc}>
                <h5>Nature is cool. Sun is red</h5>
                <h6>Education</h6>
                <small>1.8M views 11 Months ago</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
