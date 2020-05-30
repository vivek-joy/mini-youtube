import React from "react";
import css from "../../sass/pages/channels_home.module.scss";
import Button from "../../components/shared/Button";

const ChannelsHome = (props) => {
  return (
    <div className={css["channels-container"]}>
      <h4>Channels</h4>

      <div className={css["channels-item-container"]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((d) => (
          <div className={css["channels-item"]}>
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" />
            <div style={{ width: 100 }}>
              <Button extraClasses={css["subscribe-btn"]}>
                Subscribe 1.4M
              </Button>
            </div>
            <h5>Channels name</h5>
            <small>3M subscribers</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelsHome;
