import PropTypes from 'prop-types';
import '../sass/styles.scss';

import '../sass/app.css';
import 'swiper/css/swiper.css';

import MainLayout from '../components/layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object),
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
