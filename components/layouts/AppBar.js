import css from "./layouts.module.scss";
import menu from "../../assets/images/menu.png";
import search from "../../assets/images/search.png";
import notification from "../../assets/images/notification.png";
import email from "../../assets/images/email.png";
import add from "../../assets/images/add_outlined.png";
import user from "../../assets/images/user.png";

import Input from "../shared/Input";
const AppBar = (props) => {
  return (
    <div className={css["appbar-container"]}>
      <div className={css["brand"]}>
        <img src={menu} />
        <div className={`logo ${css["small"]}`}>MT</div>
        <span>mini yt</span>
      </div>

      <div className={css["search-container"]}>
        <Input inputClass={css["search-input"]} placeholder="Search for..." />
        <div className={css["icon"]}>
          <img src={search}></img>
        </div>
      </div>

      <div className={css["appbar-right"]}>
        <div>
          <img src={add} />
          <span>Upload Video</span>
        </div>
        <div className={css["icon"]}>
          <img src={notification} />
        </div>

        <div className={css["icon"]}>
          <img src={email} />
        </div>

        <div className={css["account"]}>
          <img src={user}></img>
          <div>Username</div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
