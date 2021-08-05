import { AppProps } from "next/app";
import Header from "../components/Header";
import { wrapper } from "../store";
import GlobalStyle from "../styles/global-style";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {GlobalStyle}
      <Header />
      <Component {...pageProps} />
      <div id="root-modal"></div>
    </>
  );
};
export default wrapper.withRedux(App);
