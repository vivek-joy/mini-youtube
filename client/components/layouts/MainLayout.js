import PropTypes from 'prop-types';
import AppBar from './AppBar';
import SideMenu from './SideMenu';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <AppBar />
      <div style={{ marginTop: '54px' }}>
        <SideMenu />
        <div className="main-container">{children}</div>
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
