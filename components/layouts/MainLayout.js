import AppBar from "./AppBar";
import SideMenu from "./SideMenu";

const MainLayout = (props) => {
  return (
    <>
      <AppBar />
      <div style={{ marginTop: "54px" }}>
        <SideMenu />
        <div className="main-container">{props.children}</div>
      </div>
    </>
  );
};

export default MainLayout;
