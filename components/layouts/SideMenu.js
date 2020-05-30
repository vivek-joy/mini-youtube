import React from "react";
import css from "./layouts.module.scss";
import home from "../../assets/images/sidemenu/home.png";
import userGroup from "../../assets/images/sidemenu/user_group.png";
import user from "../../assets/images/user.png";

import Upload from "../../assets/images/sidemenu/upload_to_cloud.png";
import History from "../../assets/images/sidemenu/time_machine.png";

const SideMenu = (props) => {
  const [isSmall, setIsSmall] = React.useState(false);
  return (
    <nav
      className={`${css["sidebar-container"]} ${
        isSmall ? css["sidebar-container-small"] : ""
      }`}
    >
      <ul>
        <li className={`${css["nav-item"]} ${css["active"]}`}>
          <img src={home} />
          <p>Home</p>
        </li>

        <li className={`${css["nav-item"]}`}>
          <img src={userGroup} />
          <p>Channels</p>
        </li>

        <li className={`${css["nav-item"]}`}>
          <img src={Upload} />
          <p>Upload Video</p>
        </li>

        <li className={`${css["nav-item"]}`}>
          <img src={History} />
          <p>History</p>
        </li>

        <hr color={"#333"} />

        {/* Subscriptions */}

        <h5 style={{ padding: "12px", paddingBottom: "8px" }}>SUBSCRIPTIONS</h5>

        <li className={`${css["nav-item"]}`}>
          <img src={user} style={{ width: "32px", height: "32px" }} />
          <p>Channel 1</p>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
