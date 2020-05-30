import "../sass/styles.scss";

import "../sass/app.css";
import "swiper/css/swiper.css";

import MainLayout from "../components/layouts/MainLayout";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
