import '~/helpers/polyfills.js';
import App from 'next/app';
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "~/libs/material-ui/customTheme";
import * as R from 'ramda';
import Router from 'next/router';
import { SnackbarProvider } from 'notistack';

import ReactModal from 'react-modal';
import '~/styles/index.scss';
import '~/styles/main.scss';
import Auth from '~/services/Auth/Auth';
import { WaitI18n } from '~/i18n'
import '~/services/validation/yup';

import AuthService from '~/services/Auth/auth';
import * as network from '~/services/network/axiosClient';
import { AUTH_CONFIG } from '~/services/Auth/authConfig.js';
import NOTISTACK_CONFIG from '~/services/notifications/notistack.js';
import ROUTES from '~/routes';

import ModalsProvider from '~/components/Modal/Provider';
import Modals from '~/components/Modal/Modals';
import RoutesProvider from '~/routes/Provider';
import USER_RULES from '~/services/Auth/access-rules';
import Api from '~/services/api';
import * as ApiService from '~/services/api';
import VerifyEmail from '~/services/VerifyEmail';
import DataProvider from '~/services/CommonData/Provider';
import AuthLoader from '~/services/Auth/AuthLoader';
import StoreProvider from '~/store/StoreProvider';
import { SingleModalProvider } from 'react-redux-modal-provider';
import { ErrorBoundary } from '~/services/bugsnag';

ReactModal.setAppElement('#__next')

import * as gtag from '~/services/gtag';

Router.events.on('routeChangeComplete', url => {
  gtag.pageview(url);
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={customTheme}>
        <ErrorBoundary>
          <RoutesProvider routes={ROUTES}>
            <ModalsProvider>
              <WaitI18n>
                <SnackbarProvider {...NOTISTACK_CONFIG}>
                  <Api
                    network={network}
                    routes={ApiService.config}
                    errorHandler={ApiService.errorHandler}
                    responseHandler={ApiService.responseHandler}
                  >
                    <StoreProvider>
                      <DataProvider>
                        <Component {...pageProps} />
                      <Modals/>
                      </DataProvider>
                      <SingleModalProvider />
                    </StoreProvider>
                  </Api>
                </SnackbarProvider>
              </WaitI18n>
            </ModalsProvider>
          </RoutesProvider>
        </ErrorBoundary>
      </ThemeProvider>
    );
  }
}

export default MyApp;
