import axios from "axios";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Header from "../components/Header";
import { meAPI } from "../lib/api/auth";
import { wrapper } from "../store";
import { userActions } from "../store/user";
import GlobalStyle from "../styles/global-style";
import { cookieStringToObject } from "../utils";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {GlobalStyle}
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};

App.getInitialProps = async ({
  ctx,
  Component,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const cookieObject = cookieStringToObject(ctx.req?.headers.cookie);
  const { store } = ctx;
  const { isLogged } = store.getState().user;

  try {
    if (!isLogged && cookieObject.access_token) {
      axios.defaults.headers.cookie = cookieObject.access_token;
      const { data } = await meAPI();
      store.dispatch(userActions.setLoggedUser(data));
    }
  } catch (error) {
    console.error(error);
  }

  return { pageProps };
};

export default wrapper.withRedux(App);
